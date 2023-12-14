require('dotenv').config()
const { sign, verify } = require('jsonwebtoken');


exports.createToken = (user) => {
  const accessToken = sign({ userEmail: user.email, userRole: user.role }, process.env.SECRET_KEY, { expiresIn: '30s' });
  console.log(accessToken)
  return accessToken
}

exports.validateToken = (req, res, next) => {
  // TODO delete this as it uses cookie which isn't secure
  // const accessToken = req.cookies['cpv_token'];

  const authHeader = req.headers.authkey; //authorization

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



