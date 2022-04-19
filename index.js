module.exports = {
  extends: [
    'plugin:lodash/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible'
  ],
  rules: {
    'lodash/prefer-lodash-chain': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-lodash-typecheck': 'off'
  }
}
