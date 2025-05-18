import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" 
    ? "/universitet_react/"  // Для GitHub Pages
    : "/",                   // Для локальной разработки
  build: {
    outDir: "root",
    emptyOutDir: true
  }
})