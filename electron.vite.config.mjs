import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    plugins: [svelte()],
  },
});
