import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // This helps resolve asset paths in some deployment cases
  plugins: [react()],
})
