import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 3003,
    allowedHosts: [
      'carnavalderua.ao',
      'www.carnavalderua.ao'
    ]
  }
})