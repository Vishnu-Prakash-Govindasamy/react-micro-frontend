import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    federation({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./remote-app": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 5174,
    cors: true,
  },
});
