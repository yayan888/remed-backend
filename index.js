const express = require('express')
const App = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 2080

App.use(bodyParser())
App.use(cors())

const { produkRouter } = require('./router')

App.use('/api/produk', produkRouter)


App.listen(PORT, () => console.log("RESTFull API CONNECTED :", PORT))