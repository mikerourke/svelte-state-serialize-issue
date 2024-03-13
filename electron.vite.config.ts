import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const rootDirPath = fileURLToPath(new URL(".", import.meta.url));

const outBuildDirPath = resolve(rootDirPath, "out", "build");

export default defineConfig({
  main: {
    build: {
      outDir: resolve(outBuildDirPath, "main"),
    },
    plugins: [externalizeDepsPlugin(), tsconfigPaths()],
  },
  renderer: {
    build: {
      // Just keep everything at the same directory level, don't bother with
      // an `/assets` subdirectory:
      assetsDir: "",
      outDir: resolve(outBuildDirPath, "renderer"),
    },
    plugins: [svelte(), tsconfigPaths()],
  },
  // preload: {},
});
