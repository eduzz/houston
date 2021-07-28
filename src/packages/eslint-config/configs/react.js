// eslint-disable-next-line @typescript-eslint/no-require-imports
const generator = require('./generator');

module.exports = {
  settings: {
    react: { version: 'detect' }
  },
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended'],
  rules: {
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': generator.exhaustiveDeps(),
    'react/style-prop-object': 'off'
  }
};
