import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?|expo-asset|expo-constants|expo-file-system|expo-font|expo-linking|expo-splash-screen|expo-status-bar|expo-updates|@unimodules))',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  coverageReporters: ['html', 'text'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/node_modules/react',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};

export default config;
