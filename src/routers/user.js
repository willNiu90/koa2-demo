const router = require('koa-router')()
const userCtrl = require('../controllers/UserController')

const routers = router
  .post('/login', userCtrl.login)
  .post('/users', userCtrl.create)
  .put('/users/:id', userCtrl.update)
  .get('/users/:id', userCtrl.show)
  .get('/users', userCtrl.list)
  
module.exports = routers



