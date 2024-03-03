
const assetTemplate = require('../schemas/asset')
const asset = require('../schemas/asset')

module.exports = {
  getAsset : async (req, res) => {
    const body = req.body
    const _id = body._id
    asset.findById(_id).then(data => {
      console.log('asset data', data);
      res.json(data)
    }).catch(err => {
      console.log('error at getting asset', err);
      res.status(401).json({error : err.message})
    })
  },

  getAllAsset : async (req, res) => {
    asset.find().then(r => {
      res.json(r)
    }).catch(err => {
      console.log('error at getting all assets');
      res.status(401).json({error : err.message})
    })
  },
   
  createAsset : async (req, res) => {
    const body = req.body
    const asset = new assetTemplate({
      initialCost : body.initialCost,
      location : body.location,
      name : body.name,
      purchaseDate : new Date(body.purchaseDate),
      status : body.status,
      type : body.type
    })
    console.log("asset : ", asset)
    asset.save().then(data => {
      console.log("asset created", data);
      res.json("asset created")
    }).catch(err => {
      console.log("error while creating asset", err);
      res.status(500).json({error : "error while creating asset"})
    })
  },

  updateAsset : async (req, res) => {
    const body = req.body
    const _id = body._id
    const newAsset = {...body}
    asset.findOneAndUpdate({_id}, newAsset, {upsert
      : true, new: true}).then(data => {
        console.log('updated data', data);
        res.json(data)
      }).catch(err => {
        console.log('error at updating', err);
        res.status(401).json({error : err.message})
      })
  },
  
  deleteAsset : async (req, res) => {
    const body = req.body
    const _id = body._id
    asset.deleteOne({_id}).then((data) => {
      console.log("asset deleted", data)
      res.json("asset deleted")
    }).catch(err => {
      console.log('error at deleting', err);
      res.status(401).json({error : err.message})
    }) 
  }
}