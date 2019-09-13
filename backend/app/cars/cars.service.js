require('./cars.model');
const Cars = require('mongoose').model('Cars');
const chalk = require('chalk');

exports.getCars = async (make) => {
    console.log(chalk.blue('Cars Service GETCars'));

    try {
        const cars = await Cars.find({make:make});
        return cars;
    } catch(error) {
        throw error;
    }
}