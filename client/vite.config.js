import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://192.168.1.21:8000",
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\api/, '')
  //     }
  //   }
  // }
  resolve: {
    alias: {
      process: "process/browser"
    }
  }
})
