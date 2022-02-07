const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require ('config');
const secret = config.get('secret');

exports.register = async(req,res) => {
    const {firstName,lastName,email,number,password,dateBirth,sexe,userRole}=req.body;
    const existantUser = await User.findOne({email});
    if (existantUser) return res.status(409).json({msg:"user already exist!"});
    try {
        const newUser=new User({
            firstName,
            lastName,
            email,
            number,
            password,
            dateBirth,
            sexe,
            userRole,
        });
        let salt = await bcryptjs.genSalt(10);
        let hash = await bcryptjs.hash(password, salt);
        newUser.password = hash;
        await newUser.save()
        const payload = {
            id:newUser._id,
        }
        let token = jwt.sign(payload,secret);
        res.send({
            token,
            user:{
                id:newUser._id,
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                email:newUser.email,
            }
        });
        // res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

exports.login = async(req,res)=>{
    const {email,password}= req.body;
    try {
        const user=await User.findOne({email});
        if (!user) return res.status(404).json({msg:'bad credentials'});
        const isMatch = await bcryptjs.compare(password,user.password);
        if (!isMatch) return res.status(404).json({msg:'bad credentials'});
        const payload = {
            id:user._id,
        };
        let token = jwt.sign(payload,secret);
        res.send({
            token,
            user:{
                id:user._id,
                fullName:user.fullName,
                email:user.email,
            },
            })
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


exports.auth=(req,res) =>{
    res.send(req.user);
}