const router = require('koa-router')()
const user = require('./user')
const customer = require('./customer')

router.use(user.routes(),  user.allowedMethods())
router.use(customer.routes(),  customer.allowedMethods())

module.exports = router