import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // we configure how vite should handle test files.
  test: {
    // we set all functions from vitest to be globally available without having to import them individually
    globals: true,
    // we define the environment is a DOM simulation so we can check for the existence and behaviour of elements
    environment: 'jsdom',
    // we tell what are valid test files
    include: ['./vitest/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
