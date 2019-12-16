const express = require('express');
const router = express.Router();
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const mongoose = require("mongoose");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");

// models
const Image = require("../../models/Image");
const Portfolio = require("../../models/Portfolio");

//Mongo Uri
const mongoURI = process.env.MONGODB_URI;

//create Mongo connection
const conn = mongoose.createConnection(mongoURI);

//init gfs
let gfs;

conn.once("open", () => {
  //init stream
  gfs = Grid(conn.db, mongoose.mongo);
  //this collection() determines the name of the collection
  gfs.collection("uploads");
});

// create storage object
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buffer) => {
        if (err) {
          return reject(err);
        }
        const filename =
          buffer.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          originalname: path.extname(file.originalname),
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });



// @route GET api/images/gallery
// @desc get all Images for image carousel and landing
router.get("/gallery", async (req, res) => {
  try {
    const galleryList = await Image.find({ isGallery: true })
    
    console.log("List of Gallery images:", galleryList);

    res.status(200).json(galleryList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


// @route GET api/images/portfolios/:title
// @desc get a portfolio by title
router.get('/portfolios/:title', async (req, res) => {
  try {
    const portfolio = await Portfolio.find({ title: req.params.title });
    console.log('portfolio', portfolio);
    res.status(200).json(portfolio);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


// @route GET api/images/portfolios
// @desc get all portfolios
router.get('/portfolios', async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})



// // @route GET api/images/image/:filename
// // @desc Display Image
router.get("/image/:filename", async (req, res) => {
  try {
    await gfs.files.findOne(
    {
      filename: req.params.filename
    },
    async (err, file) => {
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: "No file exists"
        });
      }
      //check if image
      if (
        file.contentType === "image/jpeg" ||
        file.contentType === "image/png" ||
        file.contentType === "image/jpg"
      ) {
        // read the output to browser
        const readstream = await gfs.createReadStream(file.filename);
        readstream.pipe(res);
      } else {
        res.status(404).json({
          err: "Not an image"
        });
      }
    });
  } catch(err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});




// @route GET /api/images/store
// @desc Display all images in JSON
router.get("/store", async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route GET /api/images/store/artwork/:title
// @desc Display an image in JSON
router.get("/store/artwork/:id", async (req, res) => {
  try {
    const selectedImage = await Image.find({ _id: req.params.id });
    console.log('shop selected image', selectedImage);
    res.status(200).json(selectedImage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})



//get a saved cart



//clear cart

//get orders

//get order by id

//create a new order from cart




module.exports = router;