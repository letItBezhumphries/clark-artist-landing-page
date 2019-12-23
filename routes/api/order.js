const express = require("express");
const router = express.Router();
const uuid = require("uuid");
require("dotenv").config();
const { check, validationResult } = require("express-validator");
const stripe = require("stripe")(process.env.STRIPE_SK_TEST);
//models


const Order = require('../../models/Order');
const Account = require("../../models/Account");
const auth = require("../../middleware/auth");


// @route = POST api/shop/order/
// @desc creates a new order 
// @access Private
router.post("/", auth, async (req, res) => {

  try {
    const account = await Account.findOne({
      user: req.user.id
    }).select('-wishList');

    const cart = account.getCart();
    const payment = account.getPrimaryCard();
    const shipTo = account.getShippingAddress();
    // console.log('cart:', cart, 'payment for order', payment, 'shipping address', shipTo);
  
    const artworkItems = cart.items.map(i => {
      return { quantity: i.quantity, item: { ...i.itemId._doc } }
    });

    const newOrder = new Order({
      orderedItems: artworkItems,
      totalAmount: cart.total,
      account: account._id,
      paymentMethod: payment[0],
      shippingAddress: shipTo[0]
    });

    console.log('order.js', newOrder);
    await newOrder.save();
    
    account.addOrder(newOrder._id);
    
    console.log('this is the resulting account from order event', account.orders)
    account.clearCart();
    console.log('final account', account)
    // await account.save();
    res.status(200).json(newOrder);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET api/shop/order/all
//@desc get json list of orders from account
//@access Private

router.get('/all', auth, async(req, res) => {
  try {
    const orders = await Account.findOne({ user: req.user.id })
      .populate('orders.order', ['_id', 'orderedItems', 'totalAmount', 'paymentMethod', 'shippingAddress', 'orderDate']);
    console.log('orders get', orders);


  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
})


module.exports = router;