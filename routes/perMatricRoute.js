const express = require('express')
const perMatricController = require('../controllers/perMatricController')


const router = express.Router()

router.get('/get', perMatricController.getPerMatric)
router.get('/getAll', perMatricController.getAllPerMatrics)

router.post('/create', perMatricController.createPerMatric)
router.put('/update', perMatricController.updatePerMatric)
router.delete('/delete', perMatricController.deletePerMatric)

router.get('/aggregate/downTime', perMatricController.avgDownTime)
router.get('/aggregate/maintanceCost', perMatricController.totalMaintanceCost)
router.get('/aggregate/highFailureAsset', perMatricController.highFailureAssets)



module.exports = router