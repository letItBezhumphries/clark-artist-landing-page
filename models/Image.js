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
    required: true // type: mongoose.Schema.Types.ObjectId,
    // ref: 'portfolio'
  },
  isGallery: {
    type: Boolean
  }
});

module.exports = Image = mongoose.model("Image", imageSchema);
