import {User} from "../models/userModel.js"
import bcryptjs from "bcryptjs"; //hasing 
import jwt from "jsonwebtoken"




//login
export const Login = async( req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){       //if any field is not provided give error
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }

        //finding user and it will return true if user is present and false if not
        const user = await User.findOne({email}); 
        if(!user){
            return res.status(401).json({
                message:"Invalid email or Password",
                success:false
            })
        }
        const isMatch=await bcryptjs.compare(password,user.password); //it checks the password with user.password
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid email or Password",
                success:false
            })
        }

        const tokenData={
            id:user._id
        }
// Signs the JWT token with the user's ID, using the secret "amanstringjibrish" and sets it to expire in 1 day
        const token= await jwt.sign(tokenData,"amanstringjibrish",{expiresIn:"1d"}) 
        return res.status(200).cookie("token",token,{httpOnly:true}).json({
            message:`Welcome back ${user.fullName}`,
            success:true
        })
        
    } catch (error) {
        console.log(error);
    }
}

export const Logout = async(req,res)=>{
// Clears the "token" cookie by setting an empty value and expiry date to the current time, making it invalid
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now),httpOnly:true}).json({ 
        message:`User logged out`,
        success:true
    })
}

//register
export const Register =async(req,res)=>{
    try {
        const {fullName, email ,password} = req.body; //taking data from body
        if(!fullName || !email || !password){       //if any field is not provided give error
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }

        //finding user and it will return true if user is present and false if not
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
        }

        const hashedPassword = await bcryptjs.hash(password,16);//we are hasing for better security and 16 is salt value
        await User.create({ //create new user
            fullName,
            email,
            password:hashedPassword
        })
        return res.status(201).json({
            message:"Account created successfully.",
            success:true,
        })

    } catch (error) {
        console.log(error);
    }
}