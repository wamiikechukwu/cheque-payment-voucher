const user = require('../model/user')

exports.create = async (req, res) => {

    try {
        const userEmail = req.body.email

        console.log(req.body.password)

        const [isEmailFound] = await user.getUserByEmail(userEmail)

        // if user email is found then throw an error
        if (isEmailFound.length !== 0) {
            throw new Error('User has an account')
        }

        const createUser = await user.create(req.body)
        console.log(req.body)
        res.status(200).json({ status: "OK", message: 'this is the results' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ status: 'FAILED', message: `${error}` })
    }
}