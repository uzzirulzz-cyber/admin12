module.exports = {
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 4201,
    publicPath: '/',
    contentBase: './dist/next-v8.1.2-lite',
    watchContentBase: true,
    compress: true,
    open: false,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};