/// <reference types="svelte" />
/// <reference types="vite/client" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      ELECTRON_RENDERER_URL: string | undefined;
    }
  }
}
