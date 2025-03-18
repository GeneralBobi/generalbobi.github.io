import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'build',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        desktop: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        gallery: resolve(__dirname, 'src/gallery.html'),
        diary: resolve(__dirname, 'src/diary.html'),
        socials: resolve(__dirname, 'src/socials.html'),
        mobileIndex: resolve(__dirname, 'src/mobile/index.html'),
        mobileAbout: resolve(__dirname, 'src/mobile/about.html'),
        mobileGallery: resolve(__dirname, 'src/mobile/gallery.html'),
        mobileDiary: resolve(__dirname, 'src/mobile/diary.html'),
        mobileSocials: resolve(__dirname, 'src/mobile/socials.html'),
        mobileTimeline: resolve(__dirname, 'src/mobile/timeline.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff|woff2|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
  },
});
