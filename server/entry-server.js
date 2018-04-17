const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    if (config.server.enablecors) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    }
    next()
  })

require('./src/routes')(app, null)

app.use('/dist', express.static(__dirname + '/../client'))

app.listen(config.server.serverport, () => {
  console.log('BITA Export app listening on port', config.server.serverport)
})
