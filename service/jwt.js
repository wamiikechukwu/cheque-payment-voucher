require('dotenv').config()
const jwt = require('jsonwebtoken');


exports.createToken = (userDetails, expiration) => {
  const accessToken = jwt.sign({userDetails}, process.env.SECRET_KEY, expiration);
  console.log(accessToken)
  return accessToken
}

/*
* validating jwt token
*/
exports.validateToken = (token) => {

    return jwt.verify(token, process.env.SECRET_KEY)

}




