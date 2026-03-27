import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto permite el acceso desde la red
    port: 5175, // Cambiamos el puerto a 5175

    hmr: {
      clientPort: 443, // Para asegurar que HMR funcione con Cloudflare Tunnel
    },
    allowedHosts: ['all'], // Permite todas las conexiones entrantes
  },
})
