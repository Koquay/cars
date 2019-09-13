const CarsService = require('./cars.service');
const chalk = require('chalk');

exports.getCars = async(req, res) => {
    console.log(chalk.blue('Cars CONTROLLER GETCars'));

    console.log('req.params', req.params)

    try {
        const cars = await CarsService.getCars(req.params.make);
        res.status(200).json(cars);
    } catch(error) {
        throw error;
    }
}