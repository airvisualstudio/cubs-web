import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        "noncooperative-proprietorial-maris.ngrok-free.dev",
        ".ngrok-free.dev",
        ".ngrok.io",
        ".ngrok-free.app",
      ],
    },
  },
});