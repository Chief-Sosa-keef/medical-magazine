import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/universitet_react/", // Должно совпадать с названием репозитория
  build: {
    outDir: "root",
    emptyOutDir: true
  }
})