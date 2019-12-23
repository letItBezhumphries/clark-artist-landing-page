const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderedItems: [
    {
      item: {
        type: Object,
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
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },
  // coupon: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Coupon",
  //   required: false
  // },
  paymentMethod: {
    type: Object,
    required: true
  },
  shippingAddress: {
    type: Object,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now()
  }
});




module.exports = Order = mongoose.model('Order', OrderSchema);