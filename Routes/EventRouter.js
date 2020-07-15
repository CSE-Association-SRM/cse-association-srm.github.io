const express = require('express');
const EventRouter = express.Router();
const { check, validationResult } = require('express-validator');

const config = require('config');

const Events = require('../Modals/events');

EventRouter.get('/', async (req, res) => {
  try {
    const events = await Events.find({});
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});
EventRouter.post('/', async (req, res) => {
  try {
    const events = await Events.create(req.body);
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = EventRouter;
