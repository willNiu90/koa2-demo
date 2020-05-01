const router = require('koa-router')()
const customerCtrl = require('../controllers/CustomerController')

const routers = router
  .get('/customers', customerCtrl.list)
  .get('/customers/:id', customerCtrl.show)
  .post('/customers', customerCtrl.create)
  .put('/customers/:id', customerCtrl.update)
  .delete('/customers/:id', customerCtrl.remove)

module.exports = routers

