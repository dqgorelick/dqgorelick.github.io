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
    new ExtractTextPlugin('main.css', {
      allChunks: true,
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: [
        'react-hot',
        'babel'
      ],
      include: path.join(__dirname, 'src')
    },
    {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
    },
    {
      test: /\.scss?$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
    },
    {
      test: /\.(png|jpg|gif|jpeg)$/,
      loader: 'file-loader'
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      loader: 'file?name=public/fonts/[name].[ext]'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', 'sass', 'css']
  }
};
