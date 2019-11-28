const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  portfolio: {
    type: String,
    required: true
  },
  isGallery: {
    type: Boolean
  }, 
  price: {
    type: String,
  },
  height: {
    type: Number
  },
  width: {
    type: Number
  }
});

module.exports = Image = mongoose.model("Image", imageSchema);
