const IndexRoutes = require('../index/index.routes');
const MakesRoutes = require('../makes/makes.routes');
const CarsRoutes = require('../cars/cars.routes');

module.exports = (app) => {
    app.use('/api/makes', MakesRoutes);
    app.use('/api/cars', CarsRoutes);
    app.use('/*', IndexRoutes);
}