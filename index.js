// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    'plugin:lodash/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible'
  ],
  rules: {
    'lodash/prefer-is-nil': 'off',
    'lodash/prefer-lodash-chain': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-lodash-typecheck': 'off'
  }
}
