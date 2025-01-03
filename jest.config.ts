import type { Config } from "jest";

const config: Config = {
  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "./reports", outputName: "rep-junit.xml" },
    ],
  ],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
};

export default config;
