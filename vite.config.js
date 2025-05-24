import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // this enables deep linking for SPA routes like /login or /venues
    historyApiFallback: true
  }
});
