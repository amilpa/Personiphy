import { ConnectDB, DisconnectDB } from "@/db/dbConnect";
import Test from "@/models/test";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { read, utils } from "xlsx";

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("file");
  const data = await file.arrayBuffer();
  const workbook = read(data);

  // Get the first worksheet
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  // Convert the worksheet to JSON
  const jsonData = utils.sheet_to_json(worksheet);

  const code = Math.random().toString(36).substring(2, 6);
  jsonData.forEach(async (row) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ID, // replace with your email
        pass: process.env.EMAIL_PASSWORD, // replace with your password
      },
    });
    transporter.sendMail({
      from: process.env.EMAIL_ID, // replace with your email
      to: row.Email,
      subject: "Test from employer",
      text: `Hello an employer has sent you a test at this link : ${process.env.NEXT_PUBLIC_HOSTED_URL} And the test code is ${code}`,
    });
  });
  await ConnectDB();
  await Test.create({
    name: formData.get("testname"),
    code: code,
    results: [],
  });
  await DisconnectDB();

  return NextResponse.json({ msg: "Success" });
}
