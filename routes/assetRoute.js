const express = require('express')
const assetController = require('../controllers/assetController')

const router = express.Router()

router.get('/get', assetController.getAsset)
router.get('/getAll', assetController.getAllAsset)

router.post('/create', assetController.createAsset)
router.post('/update', assetController.updateAsset)
router.post('/delete', assetController.deleteAsset)



module.exports = router