module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'plugin:css-modules/recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    "project": "frontend/tsconfig.json",
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'css-modules',
    'react',
    'jsx-a11y'
  ]
};
