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
      // .pipe(minifyCSS({ rebase: false }))
      .pipe(sourceMaps.write())
      .pipe(dest('./dist/css/'));
}

const minify = () => {
   return src('./dist/js/**/*.js')
      .pipe(minifyJS())
      .pipe(dest('./dist/js/'))
}

const tsc = () => {
   return src(
      'src/ts/**/*.ts',
   )
      .pipe(sourceMaps.init())
      .pipe(ts({
         target: "es6",
         module: "system",
         noImplicitAny: false,
         outFile: 'app.js',
         outDir: './dist/js/',
         esModuleInterop: true
      }))
      .pipe(sourceMaps.write())
      // TODO: set noSource to true
      // .pipe(minifyJS({ noSource: false }))
      .pipe(dest('./dist/js/'))
}

const serverTsc = () => {
   return src('src/server/*.ts')
      .pipe(sourceMaps.init())
      .pipe(ts({
         module: 'commonjs',
         target: 'es6',
         lib: ['es6', 'dom'],
         noImplicitAny: false,
         moduleResolution: 'node',
         esModuleInterop: true
      }))
      .pipe(sourceMaps.write())
      // TODO: set noSource to true
      // .pipe(minifyJS({ noSource: false }))
      .pipe(dest('./dist/server/'))
}

// const serverJS = () => {
//    return src('src/server/*.js')
//       .pipe(sourceMaps.write())
//       .pipe(minifyJS())
//       .pipe(dest('./dist/js/'))
// }

const devWatch = () => {
   bundleSass();
   tsc();
   serverTsc();
   watch('./src/scss/**/*.scss', bundleSass);
   watch('./src/ts/**/*.ts', tsc);
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
