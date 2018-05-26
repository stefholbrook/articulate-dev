const express = require('express')
const path = require('path')
const webpack = require('webpack')

const config = require('../webpack.config')

const app = express()
const compiler = webpack(config)

const pathToHTML = path.resolve('index.html')

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('*', (req, res) => res.sendFile(pathToHTML))

app.listen(3000, (err) => {
  if (err) console.log(err)

  console.log('Holla at yo girl on port 3000')
})
