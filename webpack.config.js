const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
      backendPage: './src/ts/backend/backendPage.ts',
      main: './src/ts/frontend/app.ts'
   },
   mode: 'development',
   watch: true,
   devtool: false,
   devServer: {
      static: path.join(__dirname, '/dist'), // serve your static files from here
      proxy: [ // allows redirect of requests to webpack-dev-server to another destination
         {
            context: ['/api', '/auth'],  // can have multiple
            target: 'http://localhost:8080', // server and port to redirect to
            secure: false,
         },
      ],
      port: 3030, // port webpack-dev-server listens to, defaults to 8080
   },
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