module.exports = {
  extends: ['./default', 'plugin:mdx/recommended'],
  rules: {
    'max-len': [
      'warn',
      600,
      2,
      {
        ignorePattern: '^(import|export|\\|)',
        ignoreUrls: true
      }
    ]
  }
};
