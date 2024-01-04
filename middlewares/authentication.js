const jwt = require('./../service/jwt')

exports.verify = function (permission) {

    return function (req, res, next) {


        try {
            const authHeader = req.headers['authorization'];

            if (!authHeader) {
                return res.status(401).json({ status: 'ERROR', message: 'User not authenticated' })
            }

            // const token = authHeader.split(' ')[1];

            const validToken = jwt.validateToken(authHeader)

            if (validToken) {
                req.authenticated = true
                return next();
            } else {
                return res.status(403).json({ status: 'INVALID TOKEN', message: 'JWT token invalid' })
            }
        } catch (error) {
            return res.status(500).json({ status: "FAILED", message: `${error}` })
        }
    }
}