import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/eCommerce_en_REACT/', // 👈 Nombre del repositorio en GitHub
  plugins: [react()],
});