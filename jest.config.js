module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  moduleDirectories: [
    "node_modules",
    "utils", // a utility folder
    "src" // the root directory
  ],
  moduleNameMapper: {
    "^.+\\.(scss)$": "<rootDir>/src/utils/style-mock.ts"
  }
  // ... other options ...
};
