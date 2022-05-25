const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require("../models/user");
const jwt = require('jsonwebtoken');

function isAuthenticated(req,res,next) {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,'secret',(err,user) => {
            if(!user) return res.json({message:'User not authenticated'});
            else next();
        });
    }
}

router.get('/', (req,res) => {
    res.send('response from auth.js!');
});

router.get('/protected', isAuthenticated, async(req,res) => {
    return res.json({message:'this is a protected route'});
});

router.post('/login', async (req,res) => {
    const {email, password} = req.body;
    const user = await UserModel.findOne({ email: email});
    console.log(user);
    if(user){
        if(await bcrypt.compare(password,user.password)){
            const payload =  {email};
            jwt.sign(payload,"secret",{expiresIn:"1d"}, (err,token) => {
                if (err) console.log(err);
                else{
                    return res.json({
                        message: "User Logged In!",
                        token:token
                    });
                }
            });
        }else{
            return res.json({message: "Incorrect Password"});
        }
    }else{
        return res.json({message:"Incorrect Credentials"});
    }
});

router.post('/register', async (req,res) => {
    const { name, email, password } = req.body;
    const userExists = await UserModel.findOne({ email: email});
    if(userExists)
        return res.json({message:"User already exists"});
    else{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new UserModel({
            name: name,
            email: email,
            password: hashedPassword});
        newUser
            .save()
            .then( () => {
                return res.json({message:"User created"});
            })
            .catch(err => {
                return res.json({message:err});
            })
    }
});

module.exports = router;