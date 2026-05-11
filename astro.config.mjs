import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nutriq.gr",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: "el",
        locales: { el: "el-GR", en: "en-US" },
      },
    }),
  ],
  i18n: {
    defaultLocale: "el",
    locales: ["el", "en"],
    routing: { prefixDefaultLocale: false },
  },
  build: { format: "directory" },
  vite: {
    ssr: { noExternal: ["@fontsource/inter", "@fontsource/fraunces"] },
  },
});
