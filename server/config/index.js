require('dotenv').config()

module.exports = {
    db: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PWD,
        port: process.env.DB_PORT
    },
    server: {
        'serverport': process.env.SERVER_PORT,
        'servername': process.env.SERVER_HOST,
        'enablecors': process.env.SERVER_CORS
    }
}