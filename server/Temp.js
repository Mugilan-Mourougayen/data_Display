const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const tempSchemas = new Schema({
  

  
  time: {
    type: Number,
    required: true,
  },
  teperature: {
    type: Number,
    required: true, 
  },
  humidity: {
    type: Number,
    required: true, 
  },
  val1: {
    type: Number,
    required: true, 
  },
  val2: {
    type: Number,
    required: true, 
  },
  val2: {
    type: Number,
    required: true, 
  },

});

module.exports = TempSchema = mongoose.model("temp", tempSchemas);