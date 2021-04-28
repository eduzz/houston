module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'react-hooks', 'prettier', 'eslint-plugin-import-helpers', 'eslint-plugin-unused-imports'],
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  rules: {
    'no-restricted-globals': ['error'],
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    'no-restricted-imports': ['error', 'date-fns', 'mdi-react', 'lodash', '@material-ui/core', '@material-ui/styles'],
    'linebreak-style': ['error', 'unix'],
    'max-lines': ['error', 300],
    'max-len': [
      'warn',
      125,
      2,
      {
        ignorePattern: '^(import|export)',
        ignoreUrls: true
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-trailing-spaces': ['error'],
    'no-extra-semi': ['error'],
    'no-var': ['error'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    eqeqeq: 0,
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^@material-ui/',
          '/^rxjs/',
          '/^@eduzz/',
          '/^mdi-react/',
          'module',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true
        }
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'quote-props': 'off',
    'react/style-prop-object': 'off',
    'no-useless-escape': 'error',
    'unused-imports/no-unused-imports-ts': 'error'
  }
};
