require('./makes.model');
const Makes = require('mongoose').model('Makes');
const chalk = require('chalk');

exports.getMakes = async () => {
    console.log(chalk.blue('MAKES Service GETMAKES'));

    try {
        const makes = await Makes.find({});
        return makes;
    } catch(error) {
        throw error;
    }
}