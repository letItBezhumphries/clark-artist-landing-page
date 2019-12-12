const mongoose = require("mongoose");

const CreditCardSchema = new mongoose.Schema({
  cardHolderName: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  expiry: {
    type: String,
    required: true
  },
  cvv: {
    type: Number,
    required: true
  },
  billing_zip: {
    type: Number,
    required: true
  },
  primary: {
    type: Boolean,
    required: true
  }
});

module.exports = CreditCard = mongoose.model('creditCard', CreditCardSchema);