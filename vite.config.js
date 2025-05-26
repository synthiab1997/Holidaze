import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // enables deep linking for SPA routes like /login or /venues
    historyApiFallback: true,
  },
});
