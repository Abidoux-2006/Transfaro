import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'client',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})