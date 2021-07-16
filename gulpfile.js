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

const tsc = () => {
   return src('src/ts/*.ts')
      .pipe(sourceMaps.init())
      .pipe(ts({
         target: "ESNEXT",
         module: "system",
         noImplicitAny: true,
         outFile: 'app.js',
         outDir: './dist/js/',
         moduleResolution: 'node',
      }))
      .pipe(sourceMaps.write())
      .pipe(minifyJS({ noSource: true }))
      .pipe(dest('./dist/js/'))
}

const serverTsc = () => {
   return src('src/server/*.ts')
      .pipe(sourceMaps.init())
      .pipe(ts({
         target: "commonjs",
         module: "system",
         noImplicitAny: true,
         outFile: 'server.js',
         moduleResolution: 'node'
      }))
      .pipe(sourceMaps.write())
      .pipe(minifyJS({ noSource: false }))
      .pipe(dest('./dist/server/'))
}

// const serverJS = () => {
//    return src('src/server/*.js')
//       .pipe(sourceMaps.write())
//       .pipe(minifyJS())
//       .pipe(dest('./dist/js/'))
// }

const devWatch = () => {
   watch('./src/scss/**/*.scss', bundleSass);
   watch('./src/ts/*.ts', tsc);
   watch('./src/server/*.ts', serverTsc);
};
// watch('src/server/*.ts', () => {
//    tsc('src/server/*.ts', './dist/server/', 'server.js')
//    console.log("test");
// });;


exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
exports.minify = minify;
exports.tsc = tsc;
