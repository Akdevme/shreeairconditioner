import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/contact': {
        target: 'https://script.google.com/macros/s/AKfycbwEwJjjchKeQyN_RM1F44CiB-L7HJ9icQa_SiQvtldlpOrxnyCq9lzmpgoosweA2FRB/exec',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/contact/, ''),
      },
      '/api/rating': {
        target: 'https://script.google.com/macros/s/AKfycbwAZqDRISL0ebRn_ScjonqKTvBFxN0-Yt9Cmosf7N-jpzrGg_CzxLE3DSfbsx9v9tfJ/exec',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/rating/, ''),
      },
    },
  },
})
