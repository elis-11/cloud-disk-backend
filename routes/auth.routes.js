const { Router } = require("express");
// const bcrypt = require("bcrypt");
// const User= require("../models/User")
const router = Router();

//  /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body;
        const candidate = await User.findOne({email: email})
        if (candidate){
            return res.status(400).json({message: 'such user is already registered'})
        }



    } catch (e) {
res.status(500).json({message: 'something went wrong, please try again'});
    }
    
})
//  /api/auth/login
router.post('/login', async (req, res) => {

})

module.exports = router;


//  32