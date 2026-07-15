import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://shriradhakrishnasharnam.github.io",
  base: "/",

  trailingSlash: "ignore",

  integrations: [
    sitemap()
  ],

  build: {
    format: "directory",
    inlineStylesheets: "auto"
  },

  server: {
    host: true,
    port: 4321
  },

  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  },

  scopedStyleStrategy: "attribute",

  compressHTML: true,

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover"
  },

  vite: {
    server: {
      fs: {
        strict: false
      }
    },

    build: {
      cssCodeSplit: true,
      sourcemap: false
    }
  }
});
