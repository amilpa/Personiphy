"use client"
import { ButtonCard } from "@/components"
import { useContext } from "react"
import { ValContext } from "@/app/(routes)/bigfivepersonalitytest/ValContext"

export default function PopUp() {

    const {displayErr,setDE}=useContext(ValContext)

    function Close(){
        setDE(!displayErr)
    }

    return (
    <>
    {
        displayErr && (

            <div className="w-full h-full fixed">
                <div className="w-full h-full fixed bg-[#313131]/80 flex justify-center">
                    <div className="flex flex-col items-center w-[50%] h-[20%] bg-[#f1f1f1] mt-4 py-4 px-7 rounded-sm font-bold text-xl">
                        Hola
            
                        <p className="text-xl font-light">You have not checked every box</p>
                        <div className="pt-4">
                            <ButtonCard content="Close" w="6" color={"red"} onClick={Close} />
                        </div>
                    </div>
            
                </div>
            </div>
        )
    }

    </>
    )
}


