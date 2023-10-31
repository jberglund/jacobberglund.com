import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jacobberglund.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      wrap: true,
      theme: "css-variables",
      //theme: "github-dark",
      //theme: "poimandres",
    },
  },
  scopedStyleStrategy: "where",
});
