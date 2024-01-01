require('dotenv').config

module.exports = {
    db_connection: {
        client: process.env.CLIENT,
        connection: {
            host: process.env.HOST,
            port: process.env.DATABASE_PORT,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        },
        migrations: {
            tableName: 'migrations'
        }
    }
}