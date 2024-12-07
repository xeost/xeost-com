import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'


const head = [];
if (import.meta.env.PROD) {
  // <!-- Google tag (gtag.js) -->
  // <script async src="https://www.googletagmanager.com/gtag/js?id=G-TVDVCVS9V9"></script>
  // <script>
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'G-TVDVCVS9V9');
  // </script>

  // Google tag (gtag.js)
  head.push({
    tag: 'script',
    attrs: {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-TVDVCVS9V9',
      async: true,
    },
  },
    {
      tag: 'script',
      content: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-TVDVCVS9V9');`,
    }
  );
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Xeost',
      // social: {
      //   github: 'https://github.com/xeost/xeost-com',
      // },
      sidebar: [
        {
          label: 'Customers',
          autogenerate: { directory: 'customer' },
        },
      ],
      plugins: [starlightThemeRapide()],
      customCss: ['./src/styles/rapide-theme-custom.css'],
      head,
    }),
  ],
});
