const router = require('koa-router')()
const fileCtrl = require('../controllers/FileController')

const routers = router
  .post('/files', fileCtrl.create)
  .get('/files/:id', fileCtrl.show)
  .get('/files', fileCtrl.list)
  
module.exports = routers



