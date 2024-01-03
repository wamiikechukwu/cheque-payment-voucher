const express = require('express');
const router = express.Router();
const cpvController = require('../controller/cpvController')

const use = (fn) =>{
  (req, res, next){
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}
/* create cpv. */
// TODO
// verify token is valid
// user is correct
router.post('/cpv/create', function (req, res) {
  cpvController.create(req, res)
});

module.exports = router