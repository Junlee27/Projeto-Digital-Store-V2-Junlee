module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    '^@models(.*)$': '<rootDir>/src/models$1',  // Mapeia @models para src/models
    '^@controllers(.*)$': '<rootDir>/src/controllers$1',  // Mapeia @controllers para src/controllers
    '^@services(.*)$': '<rootDir>/src/services$1',  // Mapeia @services para src/services
  },
};
