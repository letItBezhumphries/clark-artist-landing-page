const express = require("express");
require("dotenv").config();
const connectDB = require("./database/index");
const path = require("path");
const bodyParser = require("body-parser");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const multer = require('multer');
const cors = require("cors");

let whiteList = [process.env.PAYMENT_SERVER_URL];
let corsOptions = {
  origin: function(origin, callback) {
    if (whiteList.indexOf(origin) !== 1) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by cors"));
    }
  }
};



const app = express();

//connect the database
connectDB();

//Middleware

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// })

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// }

app.use(bodyParser.json());
// app.use(cors(corsOptions));
app.use(bodyParser.text());
// app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('file'));
app.use(express.json({ extended: false, 
  //need the raw body to verify webhook signatures
  //compute only when req is hitting the stripe webhook endpoint
  verify: function(req, res, buf) {
    if (req.originalUrl.startsWith("/api/stripe/webhook")) {
      req.rawBody = buf.toString();
    }
  }
}));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer().single('file'));
const DIR = __dirname;
// console.log('inside server.js', DIR);

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./public/uploads")));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-auth-token, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/images", require("./routes/api/store"));

app.use("/admin/upload", require("./routes/admin/uploads"));
// app.use("/admin/inventory", require("./routes/admin/inventory"));

app.use("/api/shop/my-cart", require("./routes/api/cart"));
app.use("/api/shop/my-account", require("./routes/api/account"));
app.use("/api/shop/order", require("./routes/api/order"));
app.use("/api/stripe", require("./routes/api/stripe"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
