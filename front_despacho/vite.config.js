import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // Asegúrate de que esta sea la IP privada actual de tu EC2-Backend
        target: 'http://10.0.135.230:8081/', 
        changeOrigin: true,
        // CORRECCIÓN: Se agrega la \ antes de /api
        rewrite: (path) => path.replace(/^/api/'')
      }
    }
  }
})