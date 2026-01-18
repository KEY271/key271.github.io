// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://key271.github.io",

  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  image: {
    responsiveStyles: true,
  },

  integrations: [sitemap()],
});
