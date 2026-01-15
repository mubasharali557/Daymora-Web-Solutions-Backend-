// const mongoose = require("mongoose");
// const planSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },      // user name
//     email: { type: String, required: true },
//     phone: { type: String, required: true },

//     planName: { type: String, required: true },
//     price: { type: Number, required: true },
//     duration: { type: String, required: true },
//   }
// );

// module.exports = mongoose.model("Plan", planSchema);



const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  planName: {
    type: String,
    required: true
  },
  planPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Plan", planSchema);
