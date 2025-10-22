import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/3rd-anniversary/',
  build: {
    outDir: 'docs', // Change output directory to docs for GitHub Pages
  }
})
