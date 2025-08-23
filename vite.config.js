import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/e-plantShopping/",
  esbuild: {
    resolve: {
      alias: {
        "./runtimeConfig": "./runtimeConfig.browser",
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },
  },
});
