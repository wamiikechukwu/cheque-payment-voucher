const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const { validateEmail, validateNames, validatePassword } = require('../validation/registration')
const {verify} = require('../middlewares/authentication')


/* create users. */
router.post('/signup', function (req, res) {
  userController.create(req, res)
});

router.post('/signin', (req, res) => {
  userController.login(req, res)
})

// TODO: move to its own folder
router.get('/dashboard', verify, (req, res, next) => {
  res.json({ message: "this is the dashboard" })
})

module.exports = router;
