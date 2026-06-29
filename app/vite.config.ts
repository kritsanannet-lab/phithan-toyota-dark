import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the production build works on any host/subpath
export default defineConfig({
  plugins: [react()],
  base: './',
});
