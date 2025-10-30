import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Correct base path for GitHub Pages
export default defineConfig({
  base: '/react-gsap-animated-website/',
  plugins: [react(), tailwindcss()],
})
