const router = require('koa-router')()
const TestController = require('../controllers/TestController')

const routers = router
  .get('/test', TestController.test)
  .get('/testTime', TestController.testTime)

module.exports = routers

