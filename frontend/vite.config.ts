import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/HubCook",
	server: {
		//toutes les url qui commence par le path sont redirigé vers le serveur
		proxy: {
			"/api": {
				target: "http://localhost:3001",
				changeOrigin: true,
			},
		},
		host: true,
		watch: {
			usePolling: true,
		},
	},
});
