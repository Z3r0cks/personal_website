const path = require('path');
const webpack = require('webpack');

module.exports = {
   entry: {
      backendPage: './src/ts/backend/backendPage.ts',
      main: './src/ts/frontend/app.ts'
   },
   mode: 'development',
   devtool: false,
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            include: [path.resolve(__dirname, 'src/ts/')]
         }
      ]
   },
   resolve: {
      extensions: ['.ts', '.js']
   },
   output: {
      publicPath: 'dist',
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/js/')
   }
}