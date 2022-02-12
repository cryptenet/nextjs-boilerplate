module.exports = {
  rootDir: './',
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '@components/(.*)': ['<rootDir>/src/components/$1'],
    '@core/(.*)': ['<rootDir>/src/components/core/$1'],
    '@pages/(.*)': ['<rootDir>/src/pages/$1'],
    '@styles/(.*)': ['<rootDir>/src/styles/$1'],
  },
};
