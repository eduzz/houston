module.exports = {
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'parser': '@typescript-eslint/parser',
  'plugins': ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'eslint-plugin-import-helpers', 'eslint-plugin-unused-imports'],
  'extends': ['plugin:react/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  'parserOptions': {
    'ecmaVersion': 10,
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true,
      'jsx': true
    }
  },
  'rules': {
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
        'ignorePattern': '^(import|export)',
        'ignoreUrls': true
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1
      }
    ],
    'no-trailing-spaces': ['error'],
    'no-extra-semi': ['error'],
    'no-var': ['error'],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'eqeqeq': 0,
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          '/^react/',
          '/^@material-ui/',
          '/^@eduzz/',
          '/^mdi-react/',
          'module',
          ['parent', 'sibling', 'index']
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true
        }
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Za-z]',
          'match': true
        }
      }
    ],
    '@typescript-eslint/no-namespace': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    'quote-props': 'off',
    'react/style-prop-object': 'off',
    'no-useless-escape': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'accessibility': 'off'
      }
    ]
  }
}
