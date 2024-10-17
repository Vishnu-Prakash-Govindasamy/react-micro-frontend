import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 5173,
    cors: true,
  },
  plugins: [
    federation({
      name: "container",
      remotes: {
        products: "http://localhost:5174/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
