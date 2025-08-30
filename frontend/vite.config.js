import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// Vite Configuration
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  define: {
    // Polyfill `process` for the browser environment
    'process.env': {},
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optional alias for better import management
    },
  },
});
