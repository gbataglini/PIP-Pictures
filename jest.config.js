module.exports  = {
    automock: false,
    bail: 0,
    cacheDirectory: "/private/var/folders/j8/0_71wq_x6kdbjxdqc4fz_1gh0000gn/T/jest_dx",
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: undefined,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ],
    coverageProvider: "v8",
    coverageReporters: [
      "json",
      "text",
      "lcov",
      "clover"
    ],
    coverageThreshold: undefined,
    dependencyExtractor: undefined,
    errorOnDeprecated: false,
    forceCoverageMatch: [],
    globalTeardown: undefined,
    globals: {},
    maxWorkers: "50%",
    moduleDirectories: [
      "node_modules"
    ],
    moduleFileExtensions: [
      "js",
      "mjs",
      "cjs",
      "jsx",
      "ts",
      "tsx",
      "json",
      "node"
    ], 
    modulePathIgnorePatterns: [],
    notify: false,
    notifyMode: "failure-change",
    preset: undefined,
    projects: undefined,
    reporters: undefined,
    resetMocks: false,
    resetModules: false,
    resolver: undefined,
    restoreMocks: false,
    rootDir: undefined,
    roots: [
      "<rootDir>"
    ],
    runner: "jest-runner",
    setupFiles: [],
    setupFilesAfterEnv: [],
    slowTestThreshold: 5,
    snapshotSerializers: [],
    testEnvironment: "jest-environment-node",
    testEnvironmentOptions: {},
    testLocationInResults: false,
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    testPathIgnorePatterns: [
      "/node_modules/"
    ],
    testRegex: [],
    testResultsProcessor: undefined,
    testRunner: "jest-circus/runner",
    transform: undefined,
    transformIgnorePatterns: [
      "/node_modules/",
      "\\.pnp\\.[^\\/]+$"
    ],
    unmockedModulePathPatterns: undefined,
    verbose: undefined,
    watchPathIgnorePatterns: [],
    watchman: true,
  };
  