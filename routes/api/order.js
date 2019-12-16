const express = require("express");
const router = express.Router();
const uuid = require("uuid");
require("dotenv").config();
const { check, validationResult } = require("express-validator");

//models
const User = require("../../models/User");
const Account = require("../../models/Account");
const auth = require("../../middleware/auth");


// @route = POST api/shop/order/
// @desc creates a new order 
// @access Private
router.post("/", auth, async (req, res) => {

  try {
    const account = await Account.findOne({
      user: req.user.id
    })
    .populate('cart.items.itemId', 'cart.total')
    .execPopulate();


    const artworkItems = account.cart.items.map(i => {
      return { item: i.itemId, quantity: i.quantity }
    });

    const order = new order({
      items: artworkItems,
      totalAmount: account.cart.total,
      account: account._id,
    });

    await order.save();

    //need to check the account and whether there is a credit card set to preferred



  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});




module.exports = router;