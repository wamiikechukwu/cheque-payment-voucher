const user = require('../model/user')
const bcrypt = require('bcrypt')

exports.create = async (req, res) => {

    try {
        const {email, password} = req.body

        const [isEmailFound] = await user.getUserByEmail(email)

        // if user email is found then throw an error
        if (isEmailFound.length !== 0) {
            throw new Error('User has an account')
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        // replace the plain text password with the hashed password
        req.body.password = hashedPassword

        const createUser = await user.create(req.body)

        res.status(200).json({ status: "OK", message: `${req.body.email} create successfully`})

        console.log(`Account created for ${email}`)


    } catch (error) {
        console.error(error)
        res.status(500).json({ status: 'FAILED', message: `${error}` })
    }
}