let mix = require('laravel-mix')
let path = require('path');

require('./nova.mix.js');

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .sass('resources/sass/field.scss', 'css')
  .vue({ version: 3})
  .nova('r64/nova-image-cropper')
