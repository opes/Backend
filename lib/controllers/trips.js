const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Trip = require('../models/Trip');

<<<<<<< HEAD
module.exports = Router().get('/', authenticate, async (req, res, next) => {
  try {
    const trips = await Trip.getTrips();
    res.send(trips);
  } catch (error) {
    next(error);
  }
});
=======
module.exports = Router()
  .post('/', authenticate, async (req, res, next) => {
    try {
      const trip = await Trip.insert(req.body);
      res.send(trip);
    } catch (error) {
      next(error);
    }
  })
  .get('/', authenticate, async (req, res, next) => {
    try {
      const trips = await Trip.getTrips();
      res.send(trips);
    } catch (error) {
      next(error);
    }
  });
>>>>>>> 77e878bb709e9539eb901d81dd77db5588d531bc
