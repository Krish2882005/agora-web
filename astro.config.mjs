import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://agorabot.app",
  integrations: [tailwind()],
});
