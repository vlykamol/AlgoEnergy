
const perMatricSchema = require('../schemas/performance')
const perMatric = require('../schemas/performance')

module.exports = {
  getPerMatric : (req, res) => {
    const body = req.body
    const _id = body._id
    console.log(_id);
    perMatric.findById(_id).then(data => {
      console.log('perMatric data', data);
      res.json(data)
    }).catch(err => {
      console.log('error at getting perMatric', err);
      res.status(401).json({error : 'error at getting perMatric'})
    })
  },

  getAllPerMatrics : (req, res) => {
    perMatric.find().then(data => {
      console.log('all perMatric data', data);
      res.json(data)
    }).catch(err => {
      console.log('error at getting all perMatrics', err);
      res.status(401).json({error : 'error at getting all perMatrics'})
    })
  },
   
  createPerMatric : (req, res) => {
    const body = req.body
    const perMatric = new perMatricSchema({
      _id: body._id,
      uptime : body.uptime,
      downtime : body.downtime,
      maintanceCost : body.maintanceCost,
      failureRate : body. failureRate,
      efficiency : body.efficiency,
      capacity : body.capacity,
      powerOutput : body.powerOutput
    })
    perMatric.save().then(data => {
      console.log("perMatric created", data);
      res.json("perMatric created")
    }).catch(err => {
      console.log("error while creating perMatric", err);
      res.status(500).json({error : "error while creating perMatric"})
    })
  },

  updatePerMatric : (req, res) => {
    const body = req.body
    const _id = body._id
    const newPerMatric = {...body}
    perMatric.findOneAndUpdate({_id}, newPerMatric, {upsert
      : true, new: true}).then(data => {
        console.log('updated perMatric', data);
        res.json(data)
      }).catch(err => {
        console.log('error at updating perMatric', err);
        res.status(401).json({error : 'error at updating perMatric'})
      })
  },

  deletePerMatric : (req, res) => {
    const body = req.body
    const _id = body._id
    perMatric.deleteOne({_id}).then((data) => {
      console.log("perMatric deleted", data)
      res.json("perMatric deleted")
    }).catch(err => {
      console.log('error at deleting perMatric', err);
      res.status(401).json({error : 'error at deleting perMatric'})
    }) 
  }
}