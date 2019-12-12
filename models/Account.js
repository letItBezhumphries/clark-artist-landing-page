const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "address",
  },
  paymentMethods: {
    primaryCard: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "creditCard",
      required: false
    },
    cards: [{
      type: [mongoose.Schema.Types.ObjectId],
      ref: "creditCard",
      required: false
    }]
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
    required: false
  }]
});

module.exports = Account = mongoose.model("account", AccountSchema);
