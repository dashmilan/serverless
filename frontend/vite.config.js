import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/', // 👈 ADD THIS LINE for production routing to work
  plugins: [react()],
  server: {
    // Dev‑only: forward /api requests to the local Express server
    proxy: {
      '/api': 'http://localhost:3000'
    },
  },
});




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
