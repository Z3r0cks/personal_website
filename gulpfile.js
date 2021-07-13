const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css')
const sourceMaps = require('gulp-sourcemaps')

compileSass.compiler = require('node-sass');

const bundleSass = () => {
   return src('./src/scss/**/*.scss')
   .pipe(sourceMaps.init())
      .pipe(compileSass().on('error', compileSass.logError))
      .pipe(minifyCss())
      .pipe(sourceMaps.write())
      .pipe(dest('./dist/css/'));
}

const devWatch = () => {
   watch('./src/scss/**/*.scss', bundleSass)
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;