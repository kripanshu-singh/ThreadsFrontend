import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/admin/api":
                "https://messold101.myshopify.com",
        },
    },
    plugins: [react()],
});
