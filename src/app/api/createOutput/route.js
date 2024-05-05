import writeXlsxFile from "write-excel-file"
import { NextResponse } from "next/server"
import axios from "axios"
import path from "path"
import fs from "fs"

export async function POST(request){
    try { 
        const result=await request.json()
        const filePath=path.join(process.cwd(),"Trial.xlsx")    
    
        let obj_h=[]
        let obj_d=[]
    
        for(let i=0;i<result.length;i++){
            obj_h=[...obj_h,result[i].Qtype]
            obj_d=[...obj_d,result[i].Ans]
        }
    
        const data=[obj_h,obj_d]
        await writeXlsxFile(data,{filePath:filePath})

        // const blob = new Blob([fileData], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

        // // Create FormData
        // const formData = new FormData();
        // formData.append("file", blob, "Trial.xlsx");

        // const response=await axios.post("https://personiphy.onrender.com/predict",formData, {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // })
        
        // console.log(response)
        return NextResponse.json({msg:"Created file",filePath:filePath})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({msg:error})
    }
}
