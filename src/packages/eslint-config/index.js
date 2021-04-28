module.exports = {
  extends: ['./default', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Za-z]',
          match: true
        }
      }
    ],
    '@typescript-eslint/no-namespace': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'off'
      }
    ]
  }
};
