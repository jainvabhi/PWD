const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  entry: {
    main: resolve(__dirname, '../src'),
    vendor: ['react-redux', 'react-router-dom', 'redux', 'redux-thunk'],
  },
  output: {
    chunkFilename: '[name].[chunkhash:8].js',
    filename: '[name].[chunkhash:8].js',
    path: resolve(__dirname, '../public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, '../src')],
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) =>
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title:
        'Atom || Automated Transformation Optimization & Modernization Platform',
      template: 'webpack/template.html',
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script',
      include: 'all',
    }),
    new OfflinePlugin({
      ServiceWorker: {
        navigateFallbackURL: '/',
      },
      AppCache: false,
    }),
  ],
};
