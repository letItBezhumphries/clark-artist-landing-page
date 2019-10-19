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
const Image = require("../.././models/Image");
const Portfolio = require("../.././models/Portfolio");
const auth = require("../../middleware/auth");

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

// //in order to display the image need to use createReadStream
// // @route GET /image/:filename
// // @desc Display Image
router.get('/:filename', (req, res) => {
  gfs.files.findOne({
    filename: req.params.filename
  }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    //check if image 
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'image/jpg') {
      // read the output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});






module.exports = router;