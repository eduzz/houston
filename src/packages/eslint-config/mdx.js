module.exports = {
  extends: ['./default', 'plugin:mdx/recommended'],
  rules: {
    'max-lines': ['off'],
    'max-len': [
      'warn',
      500,
      2,
      {
        ignorePattern: '^(import|export|\\|)',
        ignoreUrls: true
      }
    ]
  }
};
