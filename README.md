[![npm version](https://badge.fury.io/js/eslint-config-lodash.svg)](https://badge.fury.io/js/eslint-config-lodash)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![eslint](https://github.com/lodash-community/eslint-config-lodash/actions/workflows/eslint.yml/badge.svg)](https://github.com/lodash-community/eslint-config-lodash/actions/workflows/eslint.yml)

# eslint-config-lodash

ESLint Shareable Config for Lodash

## Usage

### Install packages

Install eslint-config-lodash and its peer dependencies.

```sh
npm i -D eslint-config-lodash eslint-plugin-lodash eslint-plugin-you-dont-need-lodash-underscore
```

### Update ESLint config

Add `lodash` to `extends` of your ESLint config

```js
module.exports = {
  extends: [
    'lodash'
  ]
}
```
