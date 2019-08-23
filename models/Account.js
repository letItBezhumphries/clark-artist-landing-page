const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  cardOnFile: [{ 
      nameOnCard: {
        type: String,
        required:true
      },
      cardNumber: {
        type: String,
        required: true
      },
      expiry: {
        type: String,
        required: true
      },
      cvc: {
        type: Number,
        required: true
      },
      zip: {
        type: Number,
        required: true
      },
      billingAddress: [{
        street: {
          type: String,
          required: true
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
          type: String,
          required: true
        }
      }]
  }],
  purchaseHistory: [{
    type: Schema.Types.ObjectId,
    ref: 'orders'
  }]


})