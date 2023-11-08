const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

/* create users. */
router.post('/', function(req, res) {
  userController.create(req, res)
});

module.exports = router;
