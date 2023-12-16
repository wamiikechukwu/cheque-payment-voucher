require('dotenv').config()
const { sign, verify } = require('jsonwebtoken');


exports.createToken = (userDetails, expiration) => {
  const accessToken = sign({userDetails}, process.env.SECRET_KEY, expiration);
  console.log(accessToken)
  return accessToken
}

/*
* validateToken servers to purpose
* a) it serves a middleware to prevent repeatedly user signins
* b) use for validating token
*/
exports.validateToken = (req, res, next) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ status: 'ERROR', message: 'User not authenticated' })
  }

  const token = authHeader.split(' ')[1];

  try {

    const validToken = verify(token, process.env.SECRET_KEY)

    if (validToken) {
      req.authenticated = true
      console.log(`this is valid token ${validToken}`)
      return next();
    } else {
      return res.status(403).json({ status: 'INVALID TOKEN', message: 'JWT token invalid' })
    }
  } catch (error) {
    return res.status(500).json({ status: "FAILED", message: `${error}` })
  }

}



