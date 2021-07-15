// eslint-disable-next-line @typescript-eslint/no-require-imports
const generator = require('./generator');

module.exports = {
  settings: {
    react: {
      version: 'detect'
    },
    'import/internal-regex': '(^@eduzz|react)'
  },
  plugins: ['react', 'react-hooks', 'prettier', 'eslint-plugin-unused-imports'],
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
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
    'react/no-unescaped-entities': ['off'],
    'no-restricted-imports': ['error', 'date-fns', 'mdi-react', 'lodash', '@material-ui/core', '@material-ui/styles'],
    'linebreak-style': ['error', 'unix'],
    'max-lines': ['error', 300],
    'max-len': [
      'warn',
      125,
      2,
      {
        ignorePattern: '^(import|export)',
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
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
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': generator.exhaustiveDeps(),
    'quote-props': 'off',
    'react/style-prop-object': 'off',
    'no-useless-escape': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'import/no-deprecated': 'off',
    'import/no-unused-modules': 'off',
    'import/newline-after-import': 'error',
    'import/first': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', ['external', 'internal'], ['parent', 'sibling', 'index'], 'type', 'object'],
        'newlines-between': 'always',
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: '@eduzz/**', group: 'internal', position: 'after' },
          { pattern: '~/**', group: 'internal', position: 'after' }
        ]
      }
    ]
  }
};
