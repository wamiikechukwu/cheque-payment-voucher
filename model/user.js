const db = require('../db')

exports.create = async (data) => {
    const result = await db.query(`INSERT INTO users (firstname, lastname, email, user_password, age, user_address, created_at, last_active, last_modified, account_locked, verified) VALUES(?, ?, ?, ?, ?, ?, current_time(), current_time(),current_time() , ?, ?)`,
        [data.firstname, data.lastname, data.email, data.password, data.age, data.address, data.create_at, data.last_active, data.last_modified, data.account_locked, data.verified])
    return result;
}

exports.getUserByEmail = async (email) =>{
    const  [results, fields, err] = await db.query(` SELECT * FROM users WHERE email = ?`, [email])
    return [results, fields, err];

}