import { defineConfig } from 'astro/config'; // 

import mdx from "@astrojs/mdx";



// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'one-dark-pro',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ['py', 'js', 'sh', 'html', 'css', 'json'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  },
  integrations: [mdx()]
});