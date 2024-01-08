const jwt = require('../helper/jwt')
const config = require('config')
const permissions = config.get('permissions')

/**
 * permission parameter is supplied in the api folder
 * Permissions is supplied from the config
 * @param {*} permission
 * @returns
 */
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

                if (permission === permissions[validToken.userDetails.role][permission]) {
                    req.authenticated = true
                    return next();

                } else throw new Error(`user doesn't have permission`)
            } else {
                return res.status(403).json({ status: 'INVALID TOKEN', message: 'JWT token invalid' })
            }
        } catch (error) {
            return res.status(500).json({ status: "FAILED", message: `${error}` })
        }
    }
}