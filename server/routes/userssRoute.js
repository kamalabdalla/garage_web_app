const express = require("express");
const userss = require("../models/userssSchema");
const userssRouter = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

userssRouter.post('/register', async(req, res)=>{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new userss({
            username: username,
            email: email,
            password: password
        })
        const created = await createUser.save();
        console.log(created)
        res.status(200).send("registered")
    } catch (error) {
        res.status(400).send(error)
    }
})


userssRouter.post('/login', async(req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await userss.findOne({email: email});
        if(user){
            const isMatch = await bcryptjs.compare(password, user.password);
            if(isMatch){
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else(
                res.status(400).send("Invalid Credecial")
            )
        }else{
            res.status(400).send("Invalid Credecial")
        }
    } catch (error) {
        res.status(400).send(error)
    }
})


userssRouter.get('/logout', (req, res)=>{
    res.clearCookie('jwt', {path: '/'})
    res.status(200).send("User Logged Out")
})

userssRouter.get('/', (req, res)=>{
  res.send("Abdalla")
});

module.exports = userssRouter;


