const router = require('koa-router')()
const organizationCtrl = require('../controllers/OrganizationController')

const routers = router
  .get('/organizations', organizationCtrl.list)
  .get('/organizations/:id', organizationCtrl.show)
  .post('/organizations', organizationCtrl.create)
  .put('/organizations/:id', organizationCtrl.update)
  .delete('/organizations/:id', organizationCtrl.remove)

module.exports = routers

