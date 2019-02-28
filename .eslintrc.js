module.exports = {
  'env': {
    'browser': false,
    'es6': true
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': false
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'typescript', // TODO(#37) remove this and the eslint-plugin-typescript package
                  // becuase it's supposed to be replaced by @typescript-eslint
                  // but IntelliJ doesn't work with @typescript-eslint for some reason
    '@typescript-eslint',
    'import',
    'json',
    'prettier' // prettier must be last
  ],
  'rules': {
    'import/order': 'error',

    // replace the base rule with the typescript one so that it knows when type imports are used
    'no-unused-vars': 'off',
    'typescript/no-unused-vars': 'error',

    'prettier/prettier': ['error', {
      'printWidth': 100,
      'singleQuote': true,
      'trailingComma': 'none',
      'tabWidth': 2,
      'semi': true
    }]
  }
};
