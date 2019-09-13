const router = require('express').Router();
const CarsController = require('./cars.controller');

router.get('/:make', CarsController.getCars);

module.exports = router;