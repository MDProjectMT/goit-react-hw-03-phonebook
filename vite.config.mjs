import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/goit-react-hw-03-phonebook/',
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
    hmr: {
      overlay: false,
    },
  },
  publicDir: 'public',
});
