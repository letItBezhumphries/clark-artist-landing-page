const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  image: {
    type: Schema.Types.ObjectId,
    ref: "images"
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);