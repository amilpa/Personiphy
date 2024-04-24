import {Kaushan_Script} from "next/font/google";
import ButtonCard from "./ButtonCard";
const ks=Kaushan_Script({subsets:["latin"],weight:"400"})

export default function Navbar() {
  return (
    <div className="flex justify-between bg-white fixed w-full pb-4">{/* this is the Header/Navbar */}
        <div className={`mt-9 ml-10 text-3xl ${ks.className}`}>
          Personiphy
        </div>

        <div className="flex mt-10 ml-20">
          <div className="mx-8 text-xl">About Us</div>
          <div className="mx-8 text-xl" >Teams</div>
          <div className="mx-8 text-xl">Contact</div>
        </div>

        <div className="flex mt-8">
          <div className="mx-8 text-center py-3 font-bold text-lg">Login</div>
          <ButtonCard content="Register" color="#0DD299" w="6.5"/>
        </div>

    </div>
  )
}

