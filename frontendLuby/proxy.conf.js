const { debug } = require("console");

const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:55068/',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;
