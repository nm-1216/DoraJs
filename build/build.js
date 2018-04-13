'use strict'

process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')

webpack(webpackConfig, function (err, stats) {
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    process.exit(1)
  }

})
