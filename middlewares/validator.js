const express=require('express');
const { check, validationResult } = require('express-validator');

exports.registerRules=()=>[
    check('firstName','this field is required').notEmpty(),
    check('lastName','this field is required').notEmpty(),
    check('email','this field should be a valid email').isEmail(),
    check('password','this field should be at least 6 characters').isLength({min:6}),
];
exports.loginRules=()=>[
    check('email','this field is required').notEmpty(),
    check('email','this field should be a valid email').isEmail(),
    check('password','this field should be at least 6 characters').isLength({min:6}),
]   
exports.validator = (req,res,next) =>{
    const errors=validationResult(req);
    errors.isEmpty()? next() : res.status(406).json({errors:errors.array()})
}