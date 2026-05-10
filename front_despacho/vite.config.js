import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // IP Privada de la instancia Backend (EC2-Backend)
        target: 'http://10.0.135.230:8081/', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^/api/, '')
      }
    }
  }
});