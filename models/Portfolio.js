const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  images: [
    {
      image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "image"
      },
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
      isGallery: {
        type: Boolean
      }
    }
  ]
});

module.exports = Portfolio = mongoose.model("Portfolio", portfolioSchema);
