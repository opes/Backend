const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Trip = require('../models/Trip');

module.exports = Router().get('/', authenticate, async (req, res, next) => {
  try {
    const trips = await Trip.getTrips();
    res.send(trips);
  } catch (error) {
    next(error);
  }
});
