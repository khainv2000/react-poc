import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const proxyTarget = env.VITE_DEV_PROXY_TARGET;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    server: proxyTarget
      ? {
          proxy: {
            "/api": {
              target: proxyTarget,
              changeOrigin: true,
              secure: false
            }
          }
        }
      : undefined
  };
});
