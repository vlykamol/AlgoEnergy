const mongoose = require('mongoose');
const { Schema } = mongoose;


const perMatricSchema = new mongoose.Schema({
  _id : {
    type : Schema.Types.ObjectId,
    ref: 'asset',
  },
  time : {
    type : Date,
    default : Date.now
  },
  uptime : {
    type : Number,
    default : 100,
    max : 100,
    min : 0
  },
  downtime : {
    type : Number,
    default : 0,
    max : 100,
    min : 0
  },
  maintanceCost : {
    type : Number,
  },
  failureRate : {
    type : Number,
    default : 0,
    min : 0,
    max : 100
  },
  efficiency : {
    type : Number,
    default : 0,
    min : 0,
    max : 100
  },
  capacity : {
    type : Number
  },
  powerOutput : {
    type : Number,
    required : true
  }

})

module.exports = mongoose.model('perMatric', perMatricSchema)