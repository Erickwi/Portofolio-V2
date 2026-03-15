import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Base path for GitHub Pages (project site). Change if your repo name differs.
  base: '/Portofolio-V2/',
  plugins: [react()],
})
