import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/universitet_react/", // Название репозитория ДОЛЖНО СОВПАДАТЬ!
  build: {
    outDir: "root",
    assetsDir: "assets",
    emptyOutDir: true
  }
})