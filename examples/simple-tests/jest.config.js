module.exports = {
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.spec.ts(x)', 'src/**/*.test.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
};
