module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    '@/(.*)$': '<rootDir>/src/$1',
    '@sb/(.*)$': '<rootDir>/.storybook/$1'
  }
};