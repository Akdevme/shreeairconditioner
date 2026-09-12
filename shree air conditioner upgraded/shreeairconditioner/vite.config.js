import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/rating': {
        target: 'https://script.google.com/macros/s/AKfycbwrA7IjVktlNya6n3yz4c2PI-KaoPy-fiFXKwYwtE14BPEIcrlZGPykduz78VUN_lUr/exec',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
