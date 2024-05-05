"use client"
import { useEffect } from "react"
import { Navbar } from "../../../components/index"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import BarChart from "./BarChart"

export default function Profile(){

    const {data:session,status}=useSession({})
    const router=useRouter()

    useEffect(()=>{
        if(status==="unauthenticated"){
            router.push("/api/auth/signin")
        }
    },[session])

    return( 
        <div className="flex flex-col min-h-screen min-w-full bg-[#191A1C]">
            <Navbar/>

            <div className="flex w-full h-1/2 text-white mt-28">
                <div className="flex flex-col w-2/5 h-2/5">{/**This is where the bar chart will be */}
                    <h1 className="text-2xl">Your Personality Scores</h1>
                    <BarChart/>
                </div>
            </div>


        </div>
    )
}