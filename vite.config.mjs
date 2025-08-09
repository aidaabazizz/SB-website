import { resolve } from "node:path"
import { defineConfig } from "vite"

export default defineConfig({
	root: "src",
	publicDir: "../public",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, "src/index.html"),
				catalogue: resolve(__dirname, "src/catalogue.html"),
			},
		},
	},
	server: {
		port: 3000,
		open: true,
	},
})
