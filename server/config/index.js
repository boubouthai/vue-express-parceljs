let yenv = require('yenv')

const env = yenv('yenv.yml')

console.log('CORS ENABLED', env.SERVER_CORS)
module.exports = {
    db: {
        user: env.DB_USER,
        host: env.DB_HOST,
        database: env.DB_DATABASE,
        password: env.DB_PWD,
        port: env.DB_PORT
    },
    server: {
        'serverport': env.SERVER_PORT,
        'servername': env.SERVER_HOST,
        'enablecors': env.SERVER_CORS
    }
}