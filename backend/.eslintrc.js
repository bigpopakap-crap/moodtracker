module.exports = {
  'env': {
    'browser': false,
    'es6': true
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    "project": "backend/tsconfig.json",
    'ecmaFeatures': {
      'jsx': false
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  }
};
