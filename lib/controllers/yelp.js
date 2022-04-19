const { Router } = require('express');
const yelpService = require('../services/yelpService');

module.exports = Router().get('/', async (req, res, next) => {
  console.log('GABE2', req.query.location);
  try {
    const businesses = await yelpService.getYelp(req.query.location);
    res.send(businesses);
  } catch (error) {
    next(error);
  }
});
