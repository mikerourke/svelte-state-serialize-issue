"use strict";

module.exports = {
  trailingComma: "all",
  htmlWhitespaceSensitivity: "ignore",
  plugins: ["prettier-plugin-svelte"],
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
        svelteSortOrder: "scripts-styles-options-markup",
      },
    },
    {
      files: ["*.test.ts", "*.e2e.ts"],
      options: {
        printWidth: 100,
      },
    },
  ],
};
