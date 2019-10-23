const express = require("express");
require("dotenv").config();
const connectDB = require("./database/index");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require('multer');
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
// app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('file'));
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer().single('file'));
const DIR = __dirname;
console.log('inside server.js', DIR);

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./public/uploads")));


// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, x-auth-token"
//   );
//   next();
// });

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use('/api/images', require('./routes/api/images'));
app.use("/admin/upload", require("./routes/admin/uploads"));



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
