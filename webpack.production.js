var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        comments: false,
        compress: {
            warnings: false,
        },
        sourcemap: false,
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: 'babel',
      include: path.join(__dirname, 'src')
    },
    {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
    },
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?url=false!sass-loader!import-glob?root=.'),
        exclude: /(node_modules)/
    },
    {
        test: /\.css$/,
        loader: 'style!css',
    },
    {
      test: /\.(png|jpg|gif|jpeg)$/,
      loader: 'url-loader?limit=10000'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', 'sass', 'css']
  }
};
