const express = require('express')
const perMatricController = require('../controllers/perMatricController')


const router = express.Router()

router.get('/get', perMatricController.getPerMatric)
router.get('/getAll', perMatricController.getAllPerMatrics)

router.post('/create', perMatricController.createPerMatric)
router.post('/update', perMatricController.updatePerMatric)
router.post('/delete', perMatricController.deletePerMatric)



module.exports = router