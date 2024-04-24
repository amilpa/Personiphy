import { ConnectDB,DisconnectDB } from "@/db/dbConnect";
import { NextResponse } from "next/server";
import Users from "@/models/user.js"
import bcrypt from "bcrypt"


export async function POST(req){

    try{
        await ConnectDB();
        const reqBody=await req.json();
        const {name,email,password}=reqBody

        if(!name || !email || !password){
            return NextResponse.json({msg:"Invalid Credentials"})
        }

        const userExists=await Users.findOne({email});
        

        if(userExists){
            return NextResponse.json({msg:`User with email ${email} already exists`})
        }

        const salt=await bcrypt.genSalt()
        const hashedPwd=await bcrypt.hash(password,salt);

        const newUser={
            name:name,email:email,password:hashedPwd
        }

        await Users.create(newUser)
        return NextResponse.json({msg:"Success!"})
    }

    catch(error){
        return NextResponse.json({errMsg:error})
    }

    finally{
        await DisconnectDB()
    }
}