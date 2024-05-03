import { personality,brain,cert,thumbs } from '../assets/img_index.js';
import Image from 'next/image'
import ButtonCard from "../components/ButtonCard.js";
import Navbar from "../components/Navbar.js"
import { redirect } from 'next/navigation'

export default function Home() {

  function gotoquiz(){
    redirect("/big-five-personality-test")
  }

  return (
    // the main div content

    <div className="flex flex-col min-h-screen">

      <Navbar/>
      <div className="flex justify-center mt-28 bg-[#E0D8C6]">
        <Image className="w-1/2 " src={personality} alt=""/>
      </div>

      <div className="mt-6 text-center text-2xl">Discover the colours of your personality,<br/>painting the canvas of self-awareness with insight and clarity</div>

      <div className="mt-4 flex justify-center">
        <ButtonCard content="Get Started Now" color="#0DD299" w="10"/>
      </div>

      <div className="h-[800px] w-full mt-4">
        <div className="text-center text-3xl font-bold mt-16">Our Features</div>

        <div className="flex justify-evenly h-[80%] mt-20">
          <div className="mx-4 w-[374px] h-[354px] bg-[#e3dacb] flex flex-col">
            <Image className="w-20 mx-auto mt-16" src={brain} alt=""/>
            <div className="text-center text-2xl mt-6">Personality analysis<br/> questionaire</div>
          </div>

          <div className="mx-4 w-[374px] h-[354px] bg-[#96B8C4] flex flex-col">
            <Image className="w-20 mx-auto mt-16" src={thumbs} alt=""/>
            <div className="text-center text-2xl mt-6">Customized hiring recommendations</div>
          </div>

          <div className="mx-4 w-[374px] h-[354px] bg-[#e3dacb] flex flex-col">
            <Image className="w-20 mx-auto mt-16" src={cert} alt=""/>
            <div className="text-center text-2xl mt-6">Insightful Candidate <br/> Profile</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
