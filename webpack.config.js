const path = require('path')
const webpack = require('webpack')

const config = {
  devtool: 'cheap-eval-sourcemap',
  entry: [
    'webpack-hot-middleware',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // query: {
          //   presets: ['env']
          // }
        }
      }
    ]
  },
  plugins: [
    // TODO: update server/index
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = config
