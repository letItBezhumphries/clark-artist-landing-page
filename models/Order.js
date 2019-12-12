const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
      {
        artworkId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'image',
          required: true
        },
        quantity: {
          type: Number,
          required: true
        }
      }
    ],
  totalAmount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'creditCard',
    required: true
  },
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'address',
    required: true
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
    required: true 
  }
});

module.exports = Order = mongoose.model('Order', orderSchema);