var app = require('koa')()
var helloWorld = require('./index')

const PORT = process.env.PORT || 80;

app.use(helloWorld()).listen(PORT)
