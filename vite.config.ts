import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
/**@type {import("vite").UserConfig} */
const production = (process.env.NODE_ENV === "production");
export default defineConfig({
    plugins: [
        svelte({
            preprocess: [
                sveltePreprocess(
                    {
                        sourceMap: !production,
                        scss: {
                            prependData: `@import './src/sass/variables.scss';`,
                            renderSync: true,
                        },
                    },
                ),
            ],
        }),
    ],
    server: {
        open: true,
		
    }
});
