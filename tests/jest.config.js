module.exports = {
  testEnvironment: 'node',
  rootDir: '.',
  roots: ['<rootDir>'],
  testPathIgnorePatterns: [
    '<rootDir>/src/config/env/',
    '<rootDir>/node_modules/',
  ],
  verbose: true,
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};
