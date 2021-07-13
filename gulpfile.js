const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-clean-css');
const minifyJS = require('gulp-minify');
const sourceMaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript')

compileSass.compiler = require('node-sass');

const bundleSass = () => {
   return src('./src/scss/**/*.scss')
      .pipe(sourceMaps.init())
      .pipe(compileSass().on('error', compileSass.logError))
      .pipe(minifyCSS())
      .pipe(sourceMaps.write())
      .pipe(dest('./dist/css/'));
}

const minify = () => {
   return src('./dist/js/**/*.js')
      .pipe(minifyJS())
      .pipe(dest('./dist/js/'))
}

const tsc = () => {
   return src('src/ts/*.ts')
      .pipe(sourceMaps.init())
      .pipe(ts({
         target: "ESNEXT",
         module: "system",
         noImplicitAny: true,
         outFile: 'core.js',
         outDir: './dist/js/',
         sourceRoot: './'
      }))
      .pipe(sourceMaps.write())
      .pipe(minifyJS())
      .pipe(dest('./dist/js/'))
}

const devWatch = () => {
   watch('./src/scss/**/*.scss', bundleSass);
   watch('src/ts/*.ts', tsc);
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
exports.minify = minify;
exports.tsc = tsc;
