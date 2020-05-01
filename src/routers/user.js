const router = require('koa-router')()
const userCtrl = require('../controllers/UserController')

const routers = router
  .post('/login', userCtrl.login)
  .get('/logout', userCtrl.logout)
  .post('/users', userCtrl.create)
  .get('/users/:id', userCtrl.show)
  .get('/users', userCtrl.list)
  
module.exports = routers



