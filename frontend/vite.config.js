import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://datos.madrid.es', // URL base de la API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Reemplaza '/api' por la ruta original
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
