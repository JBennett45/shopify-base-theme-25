let mix = require('laravel-mix');
// your Wordpress theme name here
const nodePath = 'node-assets';
const themePath = 'theme-dir';

mix.sass(`${nodePath}/scss/styles.scss`, `/${themePath}/assets/base-styles.min.css`)
mix.js(`${nodePath}/js/scripts.js`, `${nodePath}/js/scripts.min.js`)

mix.combine([
  `${nodePath}/js/dependencies/swiper/swiper.min.js`,
  `${nodePath}/js/scripts.min.js`
], themePath + '/assets/base-scripts.min.js');

mix.options({ processCssUrls: false })