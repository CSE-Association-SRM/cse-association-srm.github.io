const express = require('express');
const contactRouter = express.Router();
const { check, validationResult } = require('express-validator');

const config = require('config');

const Contact = require('../Modals/contact');

//route for POST /contactus
//description Sending feedback
//access type public

contactRouter.post(
  '/',
  [
    check('name', 'Please enter your name').not().isEmpty(),
    check('regNo', 'Registration No is Required').not().isEmpty(),
    check('email', 'Please include Valid Email').isEmail(),
    check(
      'text',
      'Please write Something so That we can interpret it properly'
    ),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, regNo, email, contact, text } = req.body;
    try {
      const newMsg = new Contact({
        name: name,
        regNo: regNo,
        email: email,
        contact: contact,
        text: text,
      });
      const msg = await newMsg.save();
      res.json(msg);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = contactRouter;
