import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ascolta su tutte le interfacce di rete
    port: 5173, // Usa la porta 5173
  },
});