import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/order.json': {
        target: 'https://demo-api.mymedia.az',
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/order\.json/, '/order.json'),
      },
    },
},

  plugins: [react()],
})
