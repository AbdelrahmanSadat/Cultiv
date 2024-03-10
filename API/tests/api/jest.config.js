module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.spec.js', '**/*.spec.ts'],
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
