module.exports = {
  extends: ['./base.js'],
  env: {
    browser: false,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: false
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};
