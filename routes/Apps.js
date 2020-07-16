const { Router } = require('express')
const controllers = require('../controllers/apps')

const router = Router()

router.get('/apps', controllers.getApps)
router.get('/apps/:id', controllers.getApp)
router.post('/apps', controllers.createApp)
router.put('/apps/:id', controllers.updateApp)
router.delete('/apps/:id', controllers.deleteApp)

module.exports = router