const path = require('path')
const webpack = require('webpack')

module.exports = (env = {}) => {
  const isProduction = env.production === true
  const plugins = []
  if (isProduction) {
    ;[
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: false
        }
      })
    ].forEach(x => plugins.push(x))
  }
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'app.bundle.js',
      publicPath: '/build/'
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.join(__dirname, 'src'),
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          include: path.join(__dirname, 'src'),
          use: [
            'style-loader',
            'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          ]
        }
      ]
    }
  }
}
