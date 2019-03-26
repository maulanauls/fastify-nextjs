module.exports = {
  testEnvironment: 'node',
  rootDir: '.',
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  verbose: true,
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};
