const configureMiddleware = require('./app/middleware/common.middleware');
const configureRoutes = require('./app/routes/routes');
const configureDatabase = require('./app/database/database');
const express = require('express');
const chalk  = require('chalk');
require('dotenv').config();

const app = express();
configureMiddleware(app);
configureRoutes(app);
configureDatabase();

const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(PORT, () => {
    console.log(chalk.blue(`cars server running on port ${PORT}`));
})