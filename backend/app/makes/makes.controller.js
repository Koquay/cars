const MakesService = require('./makes.service');
const chalk = require('chalk');

exports.getMakes = async(req, res) => {
    console.log(chalk.blue('MAKES CONTROLLER GETMAKES'));

    try {
        const makes = await MakesService.getMakes();
        res.status(200).json(makes);
    } catch(error) {
        throw error;
    }
}