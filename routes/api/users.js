//for registering a user
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { check, validationResult } = require('express-validator');


const User = require('../../models/User');


// @route = POST api/users
// @desc Register a user
// @access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Please enter a password of six or more characters').isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    //check if user exists
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          errors: [{
            msg: "user already exists"
          }]
        });
      }

      // //get users gravatar
      // const avatar = gravatar.url(email, {
      //   s: '200',
      //   r: 'pg',
      //   d: 'mm'
      // });

      //create new instance of User model
      user = new User({
        name,
        email,
        password
      });

      //ecrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      //save the instance
      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, 
        JWT_SECRET,
        { expiresIn: 36000 }, 
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        } 
      );
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
  });


module.exports = router;