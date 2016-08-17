var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false,
  //     },
  //     output: {
  //       comments: false,
  //     },
  //   }),
    new ExtractTextPlugin('main.css', {
      allChunks: true,
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
    },
    {
      // Parse .scss files with node-sass & then autoprefix them, then make it css
      test: /\.scss?$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
    },
    {
      test: /\.(png|jpg|gif|jpeg)$/,
      loader: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', 'sass', 'css']
  },
  watch: true
};
