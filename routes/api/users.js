const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator')

// desc register user

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please indlude a valid email').isEmail(),
    check('password', 'Please enter a password wiht 6 or more characterss').isLength({ min: 6 })
],(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // see if user exists 

    
    res.send('User route')
})


module.exports = router;