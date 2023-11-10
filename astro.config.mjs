import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://the-coder-kishor.github.io',
  base: '/buzzctf_writeup/',
  integrations: [
    markdoc(),
    starlight({
      title: 'BuzzCTF',
      editLink: {
        baseUrl: 'https://github.com/The-Coder-Kishor/buzzctf_writeup/edit/main/',
      },
      social: {
        github: 'https://github.com/The-Coder-Kishor',
        discord: 'https://discord.gg/sppgPuRVQV'
      },
      sidebar: [
        {
          label: 'BuzzCTF',
          autogenerate: { directory: 'buzzctf'}
        },
      ],
      customCss: ['/src/assets/theme.css']
    }),
  ],
});
