# babel-plugin-log-consolations

Tells you where you called console.log from. 


## Installation

```sh
$ yarn add --dev babel-plugin-log-consolations
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["log-consolations"]
}
```

### Via CLI

```sh
$ babel --plugins log-consolations script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["log-consolations"]
});
```

## Credits

Made using [generator-babel-plugin](https://github.com/babel/generator-babel-plugin) but the tests from [babel-handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md).
