const express = require('express');
const router = express.Router();
const cpvController = require('../controller/cpvController')

/* create users. */
router.post('/cpv/add', function (req, res) {
    cpvController.add(req, res)
  });

  module.exports = router