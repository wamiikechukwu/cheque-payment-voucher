const { query, body, check } = require('express-validator');

exports.validateNames = (name) =>{
    body(name)
    .trim()
    .notEmpty().withMessage('name cannot be empty')
    .isLength({min: 3}).withMessage('name must be more than 3 characters')
}

exports.validateEmail = () =>{
    body('email')
    .trim()
    .notEmpty().withMessage('email cannot be empty')
    .isEmail('Please use a valid email address')
    .contains('healthcare.ng', {ignoreCase: true, minOccurrences: 1})

}

exports.validatePassword = () =>{
    body(user_password)
    .trim()
    .notEmpty().withMessage('password cannot be empty')
    .isLength({min: 6}).withMessage('password must be more than 6 characters')

}