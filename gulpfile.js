const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-clean-css');
const minifyJS = require('gulp-minify');
const sourceMaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

compileSass.compiler = require('node-sass');

const bundleSass = () => {
   return src('./src/scss/**/*.scss')
      .pipe(sourceMaps.init())
      .pipe(compileSass().on('error', compileSass.logError))
      .pipe(minifyCSS({ rebase: false }))
      .pipe(sourceMaps.write())
      .pipe(dest('./dist/css/'));
}

const minify = () => {
   return src('./dist/js/**/*.js')
      .pipe(minifyJS())
      .pipe(dest('./dist/js/'))
}

const tsc = (path, outDir, outFile) => {
   return src(path)
      .pipe(sourceMaps.init())
      .pipe(ts({
         target: "ESNEXT",
         module: "system",
         noImplicitAny: true,
         outFile: outFile,
         outDir: outDir,
         moduleResolution: "node"
      }))
      .pipe(sourceMaps.write())
      .pipe(minifyJS())
      .pipe(dest(outDir))
}

// const serverJS = () => {
//    return src('src/server/*.js')
//       .pipe(sourceMaps.write())
//       .pipe(minifyJS())
//       .pipe(dest('./dist/js/'))
// }

const devWatch = () => {
   watch('./src/scss/**/*.scss', bundleSass);
   watch('src/ts/*.ts', () => {
      tsc('src/ts/*.ts', './dist/js/', 'core.js')
   });;
   watch('src/server/*.ts', () => {
      tsc('src/server/*.ts', './dist/server/', 'server.js')
   });;
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
exports.minify = minify;
exports.tsc = tsc;
