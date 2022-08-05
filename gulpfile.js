const { src, dest, watch, series } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-clean-css');
const minifyJS = require('gulp-minify');
const sourceMaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
compileSass.compiler = require('node-sass');
const path = require('path');
const glob = require('glob');

async function nodemonStart() {
   nodemon({ script: "dist/server/server.js", delay: 25 })
}

function browsersyncServe(cb) {
   browserSync.init({
      proxy: "localhost:3000",
      port: 5000,
      notify: true,
      open: false,
   });
   cb();
}

async function serverTsc(cb) {
   src('src/server/**/*.ts')
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
      .pipe(browserSync.stream());
   cb();
}

async function tsc(cb) {
   src('src/ts/**/*.ts')
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
      .pipe(dest('./dist/js/'))
      .pipe(browserSync.stream());
   cb();
}

function getEntries(pattern) {
   const entries = {};
   glob.sync(pattern).forEach((file) => {
      const outputFileKey = path.basename(file.slice(0, -3));
      entries[outputFileKey] = path.join(__dirname, file);
   });
   return entries;
}

async function bundleSass() {
   src('./src/scss/style.scss')
      .pipe(sourceMaps.init())
      .pipe(compileSass().on('error', compileSass.logError))
      // .pipe(minifyCSS({ rebase: false }))
      .pipe(sourceMaps.write())
      .pipe(dest('./dist/css/'))
      .pipe(browserSync.stream());
}

function watchTask(cb) {
   watch('./src/server/*.ts', serverTsc);
   watch('./src/scss/**/*.scss', bundleSass);
   watch('./src/ts/**/*.ts', tsc);
   // watch('src/ts/backend/*.ts', browsersyncReload);
   cb();
};

exports.default = series(
   serverTsc,
   tsc,
   browsersyncServe,
   watchTask,
   nodemonStart
);


// const devWatch = () => {
//    bundleSass();
//    // tsc();
//    serverTsc();
//    watch('./src/ts/**/*.ts', webpackGulp);
//    watch('./src/scss/**/*.scss', bundleSass);
//    // watch('./dist/js/*.js', browserSync.reload);
//    // watch('./dist/css/style.css', browserSync.reload);
//    // watch('./src/ts/**/*.ts', tsc);
//    watch('./src/server/*.ts', serverTsc);
// };
// // watch('src/server/*.ts', () => {
// //    tsc('src/server/*.ts', './dist/server/', 'server.js')
// // });;

// const webpackGulp = () => {
//    return src('./src/ts/backend/backendPage.ts')
//       .pipe(webpack({
//          entry: {
//             backendPage: './src/ts/backend/backendPage.ts',
//             main: './src/ts/frontend/app.ts'
//          },
//          mode: 'development',
//          devtool: false,
//          module: {
//             rules: [
//                {
//                   test: /\.ts$/,
//                   use: 'ts-loader',
//                   include: [path.resolve(__dirname, 'src/ts/')]
//                }
//             ]
//          },
//          resolve: {
//             extensions: ['.ts', '.js']
//          },
//          output: {
//             publicPath: 'dist',
//             filename: '[name].js',
//             path: path.resolve(__dirname, 'dist/js/')
//          },
//       }
//       ))
//       .pipe(dest('./dist/js'))
//       .pipe(browserSync.stream());
// }

// const minify = () => {
//    return src('./dist/js/**/*.js')
//       .pipe(minifyJS())
//       .pipe(dest('./dist/js/'))
// }

// // const tsc = () => {
// //    return src(
// //       'src/ts/**/*.ts',
// //    )
// //       .pipe(sourceMaps.init())
// //       .pipe(ts({
// //          target: "es6",
// //          module: "system",
// //          noImplicitAny: false,
// //          outFile: 'app.js',
// //          outDir: './dist/js/',
// //          esModuleInterop: true
// //       }))
// //       .pipe(sourceMaps.write())
// //       // TODO: set noSource to true
// //       // .pipe(minifyJS({ noSource: false }))
// //       .pipe(dest('./dist/js/'))
// // }

// const serverTsc = () => {
//    return src('src/server/*.ts')
//       .pipe(sourceMaps.init())
//       .pipe(ts({
//          module: 'commonjs',
//          target: 'es6',
//          lib: ['es6', 'dom'],
//          noImplicitAny: false,
//          moduleResolution: 'node',
//          esModuleInterop: true
//       }))
//       .pipe(sourceMaps.write())
//       // TODO: set noSource to true
//       // .pipe(minifyJS({ noSource: false }))
//       .pipe(dest('./dist/server/'))
// }

// // const serverJS = () => {
// //    return src('src/server/*.js')
// //       .pipe(sourceMaps.write())
// //       .pipe(minifyJS())
// //       .pipe(dest('./dist/js/'))
// // }

// nodemonStart();


// exports.bundleSass = bundleSass;
// exports.devWatch = devWatch;
// exports.minify = minify;
// // exports.tsc = tsc;