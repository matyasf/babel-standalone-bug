
const path = require('path')
const outputPath = path.resolve(__dirname, '__build__')
console.info(`Building documentation`)

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [/node_modules/, /\/lib\//, /\/es\//, /\.examples\.js$/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  entry: {
    globals: './globals.js'
  },
  output: {
    path: outputPath,
    filename: '[name].js'
  }
}
