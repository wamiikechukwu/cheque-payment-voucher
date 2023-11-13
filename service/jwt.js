require('dotenv').config()
const {sign, verify} = require('jsonwebtoken');


exports.createToken = (user) =>{
    const accessToken = sign({userEmail: user.email, userId: user.id}, process.env.SECRET_KEY);
    return accessToken
}

exports.validateToken = (req, res, next) =>{
    const accessToken = req.cookies['cpv_token'];

    if(!accessToken){
        return res.status(400).json({status: 'ERROR', message: 'User not authenticated'})
    }

    try {
      const validToken = verify(accessToken, process.env.SECRET_KEY)

      if(validToken){
        req.authenticated = true
        return next();
      }
    } catch (error) {
        return res.status(500).json({status: "FAILED", message: `error ${error}`})
    }

}



