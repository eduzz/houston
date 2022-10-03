module.exports = {
  settings: {
    'import/internal-regex': '(^@eduzz|react|^@nestjs|^~)'
  },
  plugins: ['prettier', 'eslint-plugin-unused-imports', 'sonarjs'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended'
  ],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: { modules: true, jsx: true }
  },
  rules: {
    'sonarjs/cognitive-complexity': ['warn', 45],
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-nested-template-literals': 'off',
    'no-restricted-globals': ['error'],
    'no-restricted-imports': [
      'error',
      'date-fns',
      'mdi-react',
      'lodash',
      '@material-ui/core',
      '@material-ui/styles',
      '@mui/material',
      '@mui/system',
      '@mui/styles',
      '@eduzz/houston-icons'
    ],
    'linebreak-style': ['error', 'unix'],
    'max-lines': ['error', 300],
    'max-len': ['off'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': ['error'],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-extra-semi': ['error'],
    'no-var': ['error'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'eqeqeq': 0,
    'quote-props': 'off',
    'no-useless-escape': 'off',
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
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'groups': ['builtin', ['external', 'internal'], ['parent', 'sibling', 'index'], 'object'],
        'newlines-between': 'always',
        'pathGroups': [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: '@nestjs/**', group: 'external', position: 'before' },
          { pattern: '@eduzz/**', group: 'internal', position: 'after' },
          { pattern: '~/**', group: 'internal', position: 'after' }
        ]
      }
    ]
  },
  overrides: [
    {
      files: '*.mdx',
      rules: {
        'sonarjs/no-identical-functions': 'off'
      }
    }
  ]
};
