const { Router } = require('express')
const controllers = require('../controllers/doctors')

const router = Router()

router.get('/doctors', controllers.getDoctors)


module.exports = router