const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src')
  ],
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib')
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}
