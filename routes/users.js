const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const {validateEmail, validateNames, validatePassword} = require('../validation/registration')

// todo delete
const {validateToken} = require('../service/jwt')


/* create users. */
router.post('/signup',validateNames, function(req, res) {
  userController.create(req, res)
});

router.post('/signin', (req, res)=>{
  userController.login(req, res)
})

// TODO: move to its own folder
router.get('/dashboard',validateToken,(req, res)=>{
  res.json({message: "this is the dashboard"})
})

module.exports = router;
