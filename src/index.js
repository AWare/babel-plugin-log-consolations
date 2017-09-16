export default function ({ types: t }) {
  return {
    visitor: {
      CallExpression: (path, state) => {
        if (path.node && path.node.callee && path.node.callee.object && path.node.callee.object.name && path.node.callee.property.name && path.node.callee.object.name === 'console') {
          if (['log', 'warn', 'debug', 'info', 'error'].includes(path.node.callee.property.name)) {
            let absoluteFilename = state.file.opts.filename
            let filename = absoluteFilename.slice(absoluteFilename.lastIndexOf('/') + 1)
            let consolation = t.stringLiteral(`\x1b[32m ${filename}:${path.node.loc.start.line} \x1b[0m`)
            path.node.arguments = [consolation, ...path.node.arguments]
          }
        }
      }
    }
  }
}
