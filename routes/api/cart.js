const express = require("express");
const router = express.Router();
require("dotenv").config();

//models
const User = require("../../models/User");
const Account = require("../../models/Account");
const auth = require("../../middleware/auth");

// @route    GET api/shop/my-cart
// @desc     Get current users cart
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const account = await Account.findOne({ user: req.user.id }).populate("cart.items.itemId");
    const user = await User.findById(req.user.id);
    if (!account && user) {
      const newAcct = new Account({
        user: req.user.id,
        cart: { items: [], total: 0 }
      });
      await newAcct.save();
      console.log('in routes/api/cart GET', newAcct);
      return res.status(200).json(newAcct.getCart());
    }
    if (!user) {
      return res
        .status(400)
        .json({
          msg:
            "You are not logged in, please sign in to make a purchase"
        });
    }
    console.log("in routes/api/cart GET", account);
    res.status(200).json(account.getCart());
    // res.status(200).json(account);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route = POST api/shop/my-cart/:id
// @desc add artwork item to cart
// @access Private
router.post("/:id", auth, async (req, res) => {
  try {
    const { quantity } = req.body;
    const item = await Image.findOne({ _id: req.params.id }).select(
      "-fileName -isGallery"
    );

    if (!item.inStock) {
      res.status(400).json({ msg: "Sorry, this item is no longer in stock"});
    }

    const account = await Account.findOne({
      user: req.user.id
    }).populate("cart.items.itemId");

    const updatedAccount = await account.addToCart(item, quantity, item.price);
    console.log("4 inside cart post, newCart:", updatedAccount);
    const cart = await updatedAccount.getCart();
    console.log("5 inside cart post, cart:", cart);
    res.status(201).json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route = DELETE api/shop/my-cart/:id
// @desc delete an artwork/item from cart by id
// @access Private
router.delete("/:id", auth, async (req, res) => {
  const artworkId = req.params.id;
  try {
    const item = await Image.find({ _id: artworkId });
    const account = await Account.findOne({
      user: req.user.id
    });
    const itemPrice = parseInt(item.price, 10);
    console.log("inside post", itemPrice);
    const newCart = account.removeFromCart(artworkId, itemPrice);

    res.status(203).json(newCart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @route = DELETE api/shop/my-cart
// @desc deletes all items from the cart / clear the cart
// @access Private
router.delete("/", auth, async (req, res) => {
  try {
    const account = await Account.findOne({
      user: req.user.id
    });

    await account.clearCart();

    let newCart = await account.getCart();
    console.log("inside routes/api/cart.js clearCart result", newCart);  

    res.status(203).json(newCart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;