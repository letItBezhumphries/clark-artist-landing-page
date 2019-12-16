const mongoose = require("mongoose");
// const Order = require('./Order');

const AccountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  addresses: [{
    street: {
      type: String,
      required: false
    },
    suite: {
      type: Number,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    },
    zip: {
      type: Number,
      required: false
    },
    country: {
      type: String,
      required: false
    },
    telephone: {
      type: String,
      required: false
    },
    shipping_address: {
      type: Boolean,
      required: false
    }
  }],
  creditCards: [{
    card_name: {
      type: String,
      required: true
    },
    card_number: {
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
  }],
  cart: {
    items: [
      {
        itemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Image"
        },
        quantity: {
          type: Number
        }
      }
    ],
    total: {
      type: Number
    }
  },
  wishlist: [{
    artwork: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
    }
  }],
  orders: [
    {
      order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
      }
    }
  ]
});

AccountSchema.methods.addToCart = function(artwork, price) {
  const cartItemIndex = this.cart.items.findIndex(item => {
    return item.itemId.toString() === artwork._id.toString();
  });
  let newQuantity = quantity;
  const oldTotalAmnt = this.cart.total;
  // const artworkPrice = parseInt(artwork.price, 10);
  let newTotalAmnt =  price + oldTotalAmnt; 
  const updatedCartItems = [...this.cart.items];
  //check if the item already exists in the cart
  if (cartItemIndex >= 0) { 
    newQuantity = this.cart.items[cartItemIndex].quantity + 1;
    updatedCartItems[cartItemIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      itemId: artworkId,
      quantity: newQuantity
    });
  }
  const updatedCart = {
    items: updatedCartItems,
    total: newTotalAmnt
  }
  this.cart = updatedCart;
  console.log('schema return', this.cart);
  return this.save();
}

AccountSchema.methods.getCart = function() {
  const cart = this.cart;
  return cart;
}

AccountSchema.methods.removeFromCart = function(artworkId, price) {
  const updatedCartItems = this.cart.items.filter(item => {
    return item.itemId.toString() !== artworkId.toString();
  });
  this.cart.items = updatedCartItems;
  const newTotal = this.cart.total - price;
  const updatedCart = {
    items: this.cart.items,
    total: newTotal
  };
  this.cart = updatedCart;
  console.log("schema return", this.cart);
  this.save();
}

AccountSchema.methods.getPrimaryCard = function() {
  
  const primary = this.creditCards.filter(card => {
    return card.primary;
  })
  return primary;
}

AccountSchema.methods.getShippingAddress = function() {
  const shippingAddress = this.addresses.filter(address => {
    return address.shipping;
  });
  return shippingAddress;
}

// AccountSchema.methods.addOrder = function(orderId) {
//   this.orders.push({ order: orderId });
//   this.clearCart();
//   this.save();
// }


AccountSchema.methods.clearCart = function() {
  const updatedCart = {
    items: [],
    totalAmount: 0
  };
  this.cart = updatedCart;
  this.save();
}


module.exports = Account = mongoose.model("Account", AccountSchema);
