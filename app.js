var app = require('koa')()
var helloWorld = require('./index')

app.use(helloWorld()).listen(80)
