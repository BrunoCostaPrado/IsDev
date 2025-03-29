import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["./src/index.ts"],
  splitting: true,
  sourcemap: false,
  clean: true,
  minify: false,
  dts: true,
  target: "esnext",
  outDir: "dist",
  tsconfig: "tsconfig.json",
  external: ["react"],
  format: "esm",
  loader: {
    ".js": "tsx",
  },
})
