var webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.csv$/i,
        use: 'raw-loader',
      },
    ]
  },
  devServer: {
    contentBase: './public',
  }
}
