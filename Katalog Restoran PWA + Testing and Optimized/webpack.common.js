const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/public/'),
        to: path.resolve(__dirname, 'dist/public/'),
      },
    ],
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/templates/index.html'),
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/public/'),
        to: path.resolve(__dirname, 'dist'),
        globOptions: {
          ignore: ['**/images/**'],
        },
      },
    ],
  }),
  new WorkboxWebpackPlugin.GenerateSW({
    swDest: './sw.bundle.js',
  }),
  new WebpackPwaManifest({
    id: 'Application-Foodie',
    name: 'Foodie.org',
    short_name: 'Foodie.org',
    description: 'The best place to find the best restaurant',
    theme_color: '#FDB137',
    background_color: '#f9f8f3',
    start_url: '../index.html',
    display: 'standalone',
    crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('src/public/logos/logo16x16.png'),
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: path.resolve('src/public/logos/logo24x24.png'),
        sizes: '24x24',
        type: 'image/png',
      },
      {
        src: path.resolve('src/public/logos/logo64x64.png'),
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: path.resolve('src/public/logos/logo128x128.png'),
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: path.resolve('src/public/logos/logo256x256.png'),
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: path.resolve('src/public/logos/logo512x512.png'),
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: path.resolve('src/public/logos/logo1256x1256.png'),
        sizes: '1256x1256',
        type: 'image/png',
      },
    ],
  }),
  new ImageminWebpackPlugin({
    destination: 'build/images',
    plugins: [
      ImageminMozjpeg({
        quality: 50,
        progressive: true,
      }),
    ],
  }),
  new BundleAnalyzerPlugin(),
  ],
};
