import { resolve } from "node:path"

import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: "./tsconfig.app.json" })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "isdev",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
