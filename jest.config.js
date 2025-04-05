module.exports = {
    preset: 'ts-jest/presets/default',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': ['ts-jest', {
        tsconfig: 'tsconfig.spec.json',
      }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/?(*.)+(spec|test).ts'],
    transformIgnorePatterns: [
      '/node_modules/(?!(@angular)/)'
    ],
  };
  