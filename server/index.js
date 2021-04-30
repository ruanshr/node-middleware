const express = require('express')
const proxy = require('http-proxy-middleware')
const path = require('path')
const { port = 8000, proxyConfig = {}} = require('../config/serverConfig')

const app = express()
app.use('/public', express.static(path.join(__dirname, '../', 'static')))

Object.keys(proxyConfig).map(key => {
    app.use(key, proxy(proxyConfig[key]))
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})