const user = require('../model/user')
const bcrypt = require('bcrypt')

const jwt = require('../service/jwt')


exports.create = async (req, res) => {

    try {
        const { email, password } = req.body

        const [isEmailFound] = await user.getUserByEmail(email)

        // if user email is found then throw an error
        if (isEmailFound.length !== 0) {
            throw new Error('User has an account')
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        // replace the plain text password with the hashed password
        req.body.password = hashedPassword

        await user.create(req.body)

        res.status(200).json({ status: "OK", message: `${req.body.email} account create successfully` })

        console.log(`Account created for ${email} successfully`)


    } catch (error) {
        console.error(error)
        res.status(500).json({ status: 'FAILED', message: `${error}` })
    }
}

exports.login = async (req, res) => {
    try {

        const { email, password } = req.body

        const findUserByEmail = await user.getUserByEmail(email)

        // findUserByEmail returns a nested array ie [ [] ], get the first array and check if its empty
        if(findUserByEmail[0].length === 0){
            res.status(404).json({status: 'ERROR', message: 'User email not found'})
            return
        }

        const getHashedPassword = findUserByEmail[0][0].user_password

        const comparedPassword = await bcrypt.compare(password, getHashedPassword)

        if(comparedPassword){
            console.log(`Password matches`)

            // passed in findUserByEmail[0][0] to get the user details from the db

            const accessToken = jwt.createToken({email:findUserByEmail[0][0].email, role:findUserByEmail[0][0].role}, {expiresIn: '24h'})

            // TODO delete this, as using cookie isn't secure
            // res.cookie('cpv_token', accessToken, { 
            //     maxAge: 86400000
            // });

            res.status(200).json({ status: "OK", message: `${req.body.email} signin successfully`, token: accessToken}) 
            
        } else{
            res.status(500).json({ status: "FAILED", message: `wrong username or password` })
            console.log(` Password DOESN'T match`) 
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({ status: 'FAILED', message: `${error}` })
    }
}