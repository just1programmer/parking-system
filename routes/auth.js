// we define all of our auth in this file
const express = require('express');
const router= express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//we instead of app.get, use router.get

//@route    GET /api/auth/test
//@desc      Test the auth route
//@access       Public

router.get("/test", (req,res)=>{
    res.send("Auth route is working");
})



//@route    POST /api/auth/register
//@desc      Test the auth route
//@access       Public

router.post("/register",async (req,res)=>{

//before we create the user we NEED to hash the password
const hashedPassword =await bcrypt.hash(req.body.password,12);

    try {
       
        //To create a new user we need to import at the top the model for user.
         //create a new user.
        
        const newUser = new User({
            email: req.body.email,
            password : hashedPassword,
            name: req.body.name
        });
        // Save the user to the database. 
        //It is important to use await so we get all data we need.

        const savedUser = await newUser.save();

        // return the new user as json
        return res.json(savedUser)

    } catch (error) {
        console.log(error);
        res.status(500).send(err.message);
    }
})


module.exports = router;