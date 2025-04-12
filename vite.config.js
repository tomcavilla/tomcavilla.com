import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    port: 4000
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        events: resolve(__dirname, 'events/index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        topsham: resolve(__dirname, 'topsham/index.html'),
        exmouth: resolve(__dirname, 'exmouth/index.html'),
        mevagissey: resolve(__dirname, 'mevagissey/index.html'),
        dartmoor: resolve(__dirname, "dartmoor/index.html"),
        bristol: resolve(__dirname, "bristol/index.html"),
        bjj: resolve(__dirname, "bjj/index.html"),
        carlyonbay: resolve(__dirname, "carlyon-bay/index.html"),
        severn: resolve(__dirname, "severn/index.html"),
        bjj2: resolve(__dirname, "bjj2/index.html"),
      },
    },
  },
})





