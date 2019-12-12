const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  suite: {
    type: Number,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  preferredMethodOfContact: {
    type: String,
    required: false
  }
});

module.exports = Address = mongoose.model("address", AddressSchema);
