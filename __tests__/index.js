/* eslint-env jest */

import { transform } from 'babel-core'
import plugin from '../src'

var example = `
console.log('hello')
console.info('hello')
console.debug('hello')
console.warn('hello')
console.error('hello')
console.log('hello',1,2,'hi')
`

it('works', () => {
  const {code} = transform(example, {plugins: [plugin], filename: 'foo.js'})
  expect(code).toMatchSnapshot()
})
