import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // allow remote dev/preview sandboxes (e.g. cloud IDE tunnels) to load the dev server
    allowedHosts: [".e2b.app"],
  },
});
