const { Router } = require('express')
const controllers = require('../controllers/apps')

const router = Router()

router.get('/apps', controllers.getApps)
router.get('/apps/:id', controllers.getApp)
router.post('/apps', controllers.createApp)

module.exports = router