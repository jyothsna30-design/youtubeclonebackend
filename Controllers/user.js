import {User} from '../Modals/user.js';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const cookieOptions= {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax'
};
// User Registration
export const signUp = async (req, res) => {
    try{
        const {channelName, userName, password, about, profilePic} = req.body;
        const isExist = await User.findOne({userName});
        if(isExist){
            return res.status(400).json({error:"User already exists"});
        }
        else{ // hash password using bcrypt
            let hashedPassword = await bycrypt.hash(password, 10);
            const user = new User({
                channelName,
                userName,
                password: hashedPassword,
                about,
                profilePic
            });
            await user.save();
            res.status(201).json({message:"User registered successfully"});
        }
    }catch(err){
        res.status(500).json({error:'server error'});
    }
}

// User Login
export const signIn = async (req, res) => {
    try{
        const {userName, password} = req.body;
        const user = await User.findOne({userName});
        if(user && await bycrypt.compare(password, user.password)){

            const token = jwt.sign({userId: user._id},'secretKey'); //token generation
            res.cookie('token',token,cookieOptions);
            res.status(200).json({message:"User signed in successfully"});
        }
        else{   
            res.status(400).json({error:"Invalid credentials"});
        }
    }
    catch(error) {
        res.status(500).json({error:'server error'});
    }
}
//logout user
export const logOut = (req, res) => {
    res.clearCookie('token',cookieOptions).json({message:"User signed out successfully"});
}
