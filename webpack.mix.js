const mix = require('laravel-mix')
let path = require('path');

require('./nova.mix.js');

mix
  .js('resources/js/field.js', 'dist/js')
  .vue({ version: 3})
  .sass('resources/sass/field.scss', 'dist/css')
  .setPublicPath('./')
  .webpackConfig({
    resolve: {
      symlinks: false
    }
  })
  .babelConfig({
    plugins: [
      [
        'component',
        {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-chalk'
        }
      ]
    ]
  })
