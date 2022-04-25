/// <reference types="vite/client" />

import * as path from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: '@eduzz/houston-token',
      fileName: format => `index.${format}.js`
    },
    target: 'es6',
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
});
