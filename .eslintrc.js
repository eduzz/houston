// eslint-disable-next-line @typescript-eslint/no-require-imports
const generator = require('./src/pages/eslint-config/configs/generator');

module.exports = {
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['./src/pages/eslint-config/mdx'],
      rules: {
        'react-hooks/exhaustive-deps': 'off'
      }
    },
    {
      files: ['*.tsx', '*.ts', '*.js', '*.jsx'],
      extends: './src/pages/eslint-config',
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'max-lines': ['error', 500],
        'no-restricted-imports': [
          'error',
          'date-fns',
          'mdi-react',
          'lodash',
          '@material-ui/core',
          '@material-ui/styles',
          '@eduzz/houston-ui/*'
        ],
        'react-hooks/exhaustive-deps': generator.exhaustiveDeps('warn', [], true, true)
      }
    }
  ]
};
