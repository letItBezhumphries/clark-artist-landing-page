const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

const PORT = process.env.PORT || 3003;

app.listen(PORT, ()=> console.log(`App is listening on ${PORT}`));