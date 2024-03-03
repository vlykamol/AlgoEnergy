const mongoose = require('mongoose');


const assetSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  type : {
    type : String,
    required : true,
    enum : ["solar", "wind", "hydro", "tidal", "geothermal", "biomass"]
  },
  location : {
    latitude : {
      type : Number,
      required : true
    },
    longitude : {
      type : Number,
      required : true
    }
  },
  purchaseDate : {
    type : Date,
    required : true
  },
  initialCost : {
    type : Number,
    required : true
  },
  status : {
    type : String,
    required : true
  }
})

module.exports = mongoose.model('asset', assetSchema)