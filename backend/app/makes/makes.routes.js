const router = require('express').Router();
const MakesController = require('./makes.controller');

router.get('/', MakesController.getMakes);

module.exports = router;