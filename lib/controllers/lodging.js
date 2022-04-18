const { Router } = require('express');
const Lodging = require('../models/Lodging');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const hotel = await Lodging.insert(req.body);
      res.send(hotel);
    } catch (error) {
      next(error);
    }
  })
  .get('/', async (req, res, next) => {
      try{
          const hotel = await Lodging.getHotelById
      }
  });
