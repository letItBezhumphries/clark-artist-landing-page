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
      src: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      medium: {
        type: String,
        required: true
      },
      materials: {
        type: String,
        required: true
      },
      dimensions: {
        height: {
          type: Number,
          required: true
        },
        width: {
          type: Number,
          required: true
        }
      },
      dateOfCreation: {
        type: String,
        required: true
      },
      subject: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Portfolio = mongoose.model("Portfolio", portfolioSchema);
