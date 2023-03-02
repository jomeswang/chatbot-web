import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/edge';
import unocss from 'unocss/astro';
import { presetUno } from 'unocss';
import presetAttributify from '@unocss/preset-attributify';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [unocss({
    presets: [presetAttributify(), presetUno()]
  }), solidJs()],
  output: 'server',
  server: {
    port: +process.env.PORT || 3000,
    host: true
  },
  adapter: node({
    mode: "standalone"
  })
});