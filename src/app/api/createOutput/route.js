import { ConnectDB, DisconnectDB } from "@/db/dbConnect";
import Results from "@/models/results";
import Test from "@/models/test";
import axios from "axios";
import { NextResponse } from "next/server";
import { utils, write } from "xlsx";

export async function POST(request) {
  try {
    const result = await request.json();

    let worksheet = utils.json_to_sheet(result.result);
    let workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    let binaryString = write(workbook, { type: "binary" });
    let formData = new FormData();

    formData.append(
      "file",
      new Blob([
        new Uint8Array([...binaryString].map((char) => char.charCodeAt(0))),
      ]),
      "file.xlsx"
    );

    console.log("starting");
    const res = await axios.post(
      "https://personiphy.onrender.com/predict",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        },
      }
    );

    // let obj_h=[]
    // let obj_d=[]

    // for(let i=0;i<result.length;i++){
    //     obj_h=[...obj_h,result[i].Qtype]
    //     obj_d=[...obj_d,result[i].Ans]
    // }

    // const data=[obj_h,obj_d]
    // await writeXlsxFile(data,{filePath:filePath})

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

    await ConnectDB();

    const newResult = await Results.create({
      ...res.data.result[0],
      name: result.name,
    });
    const test = await Test.findOne({ code: result.code });
    if (test) {
      test.results.push(newResult._id);
      await test.save();
    }

    await DisconnectDB();

    return NextResponse.json(res.data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: error.response.data });
  }
}
