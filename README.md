[![npm version](https://badge.fury.io/js/eslint-config-lodash.svg)](https://badge.fury.io/js/eslint-config-lodash)
[![lint](https://github.com/lodash-community/eslint-config-lodash/actions/workflows/lint.yml/badge.svg)](https://github.com/lodash-community/eslint-config-lodash/actions/workflows/lint.yml)
[![ESLint Recommended](https://img.shields.io/badge/eslint-recommended-%234B32C3)](https://github.com/eslint-recommended)

# eslint-config-lodash

ESLint Shareable Config for Lodash

## Overview

`eslint-config-lodash` is using following configurations and plugins.

- [eslint-plugin-lodash](https://www.npmjs.com/package/eslint-plugin-lodash)
- [eslint-plugin-you-dont-need-lodash-underscore](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore)

## Installation

npm:

```sh
npm i -D eslint-config-lodash
```

Yarn:

```sh
yarn add -D eslint-config-lodash
```

## Usage

Add `lodash` to `extends` of your ESLint config.

```js
module.exports = {
  extends: [
    'lodash'
    // add other rulesets here if needed
  ],
  rules: {
    // override/add rules settings here if needed
  }
}
```
