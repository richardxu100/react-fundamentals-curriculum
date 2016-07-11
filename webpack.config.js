var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  // resolve: {
  //   extensions: ['', '.js', '.jsx', '.css']
  // },
  plugins: [HTMLWebpackPluginConfig],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }  
}
