const path = require('path')
const bodyParser = require('koa-bodyparser')
const convert = require('koa-convert')
const koaLogger = require('koa-logger')
const koaStatic = require('koa-static')
const routers = require('./routers/index')
const mongoose = require('mongoose')
const Qs = require('qs')
const koajwt = require('koa-jwt')
const cors = require('koa-cors')
const YAML = require('yamljs')

const config = YAML.load(path.resolve(__dirname, '../base.yml'))
const { baseUrl, port, user, pass, dbName } = config.DB
const Koa = require('koa')
const app = new Koa()
const URL = `mongodb://${baseUrl}:${port}`
const ENV = process.env.NODE_ENV

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: dbName[ENV],
  user,
  pass
}, function (err) {
  console.log('mongo connect is error', err)
})
mongoose.set('useCreateIndex', true)

app.use(async (ctx, next) => {
  try {
    ctx.qs= Qs.parse(ctx.query)
    await next()
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500
    ctx.body = {
      code: ctx.status,
      result: null,
      msg: err.message
    }
    ctx.app.emit('error', err, ctx)
  }
})
app.use(cors())
app.use(convert(koaLogger()))
app.use(bodyParser())
app.use(convert(koaStatic(
  path.join(__dirname, 'assets')
)))
// app.use(koajwt({
//   secret: 'my_token'
// }).unless({
//   path: [/\login/, /files/, /test/]
// }))
app.use(routers.routes(), routers.allowedMethods())


app.listen(3000)