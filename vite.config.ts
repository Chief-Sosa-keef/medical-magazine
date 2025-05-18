import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/universitet-react/",
  build: {
    outDir: "root",
    emptyOutDir: true
  }
})