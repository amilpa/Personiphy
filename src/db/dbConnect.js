import mongoose from "mongoose";

export async function ConnectDB(){
    if(mongoose.connections[0].readyState){
        return;
    }

    await mongoose.connect(process.env.MONGO_URI)
}

export async function DisconnectDB(){
    if(!mongoose.connections[0].readyState){
        return;
    }

    await mongoose.disconnect()
}