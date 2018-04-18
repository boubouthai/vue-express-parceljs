const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    if (config.server.enablecors) {
        console.warn('CORS activated')
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    } else {
        console.info('No Cors is setup')
    }
    next()
  })

require('./src/routes')(app, null)

if (process.env.NODE_ENV === 'production') {
    console.info('Running in Production mode, process static file')
    app.use('/dist', express.static(__dirname + '/../client'))
}

app.listen(config.server.serverport, () => {
  console.log('BITA Export app listening on port', config.server.serverport)
})
