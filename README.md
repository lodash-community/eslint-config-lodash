[![npm version](https://badge.fury.io/js/eslint-config-lodash.svg)](https://badge.fury.io/js/eslint-config-lodash)
[![lint](https://github.com/lodash-community/eslint-config-lodash/actions/workflows/lint.yml/badge.svg)](https://github.com/lodash-community/eslint-config-lodash/actions/workflows/lint.yml)
[![ESLint Recommended](https://img.shields.io/badge/eslint-recommended-%234B32C3)](https://github.com/eslint-recommended)

# eslint-config-lodash

ESLint Shareable Config for Lodash

## Overview

`eslint-config-lodash` is using following configurations and plugins.

- [eslint-plugin-lodash](https://www.npmjs.com/package/eslint-plugin-lodash)
- [eslint-plugin-you-dont-need-lodash-underscore](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore)

## Peer dependencies

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-plugin-lodash](https://www.npmjs.com/package/eslint-plugin-lodash)
- [eslint-plugin-you-dont-need-lodash-underscore](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore)

## Usage

### Install packages

#### npm@>=7

Install `eslint-config-lodash`.

```sh
npm i -D eslint-config-lodash
```

#### npm@<7

Install `eslint-config-lodash` and its peer dependencies.

```sh
npm i -D \
  eslint \
  eslint-plugin-lodash \
  eslint-plugin-you-dont-need-lodash-underscore \
  eslint-config-lodash
```

### Use in ESLint config

Add `lodash` to `extends` of your ESLint config.

```json
{
  "extends": [
    "lodash"
  ]
}
```
