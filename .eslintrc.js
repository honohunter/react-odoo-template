module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/babel', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEVMODE__: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 9,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
      arrowFunction: true,
    },
  },
  plugins: ['prettier', 'react', 'babel'],
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': [0],
    'react/destructuring-assignment': [0],
    'react/jsx-props-no-spreading': [0],
    'import/prefer-default-export': [0],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.common.js',
      },
    },
  },
};
