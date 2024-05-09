import { defineConfig } from 'vite'
import { resolve } from "path";
import fs from 'node:fs/promises';
// import vue from '@vitejs/plugin-vue'
import vue from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    tsconfigRaw: await fs.readFile(
      new URL('./tsconfig-static.json', import.meta.url),
      'utf-8'
    ),
  },
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/iubenda-do-install.ts"),
      name: "iubenda-install",
      // the name of the output files when the build is run
      fileName: "iubenda-install",
    },
    outDir: 'dist-static'
  },
})
