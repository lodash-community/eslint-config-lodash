[![npm version](https://badge.fury.io/js/eslint-config-lodash.svg)](https://badge.fury.io/js/eslint-config-lodash)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![eslint](https://github.com/lodash-community/eslint-config-lodash/actions/workflows/eslint.yml/badge.svg)](https://github.com/lodash-community/eslint-config-lodash/actions/workflows/eslint.yml)

# eslint-config-lodash

ESLint Shareable Config for Lodash

## Concepts

- Based on recommended config of [eslint-plugin-lodash](https://www.npmjs.com/package/eslint-plugin-lodash)
- Prefer using native API over Lodash

## Usage

### Install packages

Install eslint-config-lodash and its peer dependencies.

```sh
npm i -D \
  eslint \
  eslint-plugin-lodash \
  eslint-plugin-you-dont-need-lodash-underscore \
  eslint-config-lodash
```

### Update ESLint config

Add `lodash` to `extends` of your ESLint config.

```js
module.exports = {
  extends: [
    'lodash'
  ]
}
```
