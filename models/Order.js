const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  items: [
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
  orderDate: {
    type: Date,
    default: Date.now()
  }
});

// orderSchema.methods.getOrderTotal = function(percentage) {
//   const coupon = this.coupon;
//   let updatedOrder;
//   if (!coupon) {
    
//   }
// }


module.exports = Order = mongoose.model('Order', OrderSchema);