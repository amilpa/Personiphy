import { ConnectDB,DisconnectDB } from "@/db/dbConnect";
import { NextResponse } from "next/server";
import Users from "@/models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(req){
    try{
        await ConnectDB();
        const reqBody=await req.json()

        const {email,password}=reqBody

        if(!email || !password){
            return NextResponse.json({msg:"Invalid Credentials"})
        }

        const user=await Users.findOne({email});

        if(!user){
            return NextResponse.json({msg:"This user has not registered!"})
        }

        const validPwd=await bcrypt.compare(password,user.password);

        if(!validPwd){
            return NextResponse.json({msg:"The passwords dont match"})
        }

        const tokenData={
            id:user._id,
            email:user.email
        }

        const token=jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:"2d"})
        const response=NextResponse.json({msg:"Login Success!"})

        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response
    }

    catch(error){
        return NextResponse.json({msg:error})
    }

    finally{
        await DisconnectDB()
    }
}