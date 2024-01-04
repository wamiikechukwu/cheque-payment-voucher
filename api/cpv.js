const express = require('express');
const router = express.Router();
const cpvController = require('../controller/cpvController')
const auth = require('../middlewares/authentication')

/* create users. */
router.post('/cpv/add', auth.verify(""), function (req, res) {
    cpvController.create(req, res)
  });

  module.exports = router