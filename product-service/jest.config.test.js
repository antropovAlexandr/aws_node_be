module.exports = {
  moduleNameMapper: {
    '^@libs(.*)$': '<rootDir>/src/libs$1',
    '^@functions(.*)$': '<rootDir>/src/functions$1',
  },
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
};
