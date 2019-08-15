import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const portfolioSchema = Schema({
  id: Number, //need to make this so it is not unique
  portfolioTitle: String,
  portfolioImages: Array, //of imageIds or Numbers
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);


const imageSchema = Schema({
  id: Number,  //should be unique
  title: String,
  portfolioId: Number, //should be a 
  description: String,
  dateOfCreation: String
})

const Image = mongoose.model('Image', imageSchema);


const cartSchema = Schema({
  id: Number,
  items: Array,
})

const Cart = mongoose.model('Cart', cartSchema);


const userSchema = Schema({
  id: Number,
  name: String,
  email: String,
  password: String
})

const User = mongoose.model('User', userSchema);

const orderSchema = Schema({
  id: Number,
  userId: Number,
  itemNum: Number,
  orderIds: Array,

});




module.exports = {
  userSchema,
  User,
  cartSchema,
  Cart,
  Image,
  imageSchema,
  Portfolio,
  portfolioSchema
};