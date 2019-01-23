
const configDev = require('./config/dev.env');
const configProd = require('./config/prod.env');

module.exports = process.env.NODE_ENV === 'production' ? configProd : configDev;