"use client"
import { RadioButtons,ButtonCard,PopUp, Navbar } from "../../../components/index"
import { img1,img2,img3 } from "../../../assets/img_index"
import Image from "next/image"
import {questions} from "./questions"
import {useEffect, useState,useRef} from "react"
import { useSession} from "next-auth/react"
import { useRouter } from "next/navigation"
import { ValContext } from "./ValContext"
import axios from "axios"

export default function big5PersonalityTequestions(){

  const router=useRouter()
  const {data:session,status}=useSession({})

  useEffect(()=>{
    if(status==="loading"){
      return ()=> {
        <div role="status">
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      }
    }
    if(!session){
      router.push("/api/auth/signin")
    }

    if(status==="authenticated"){
      router.push("/bigfivepersonalitytest")
    }

  },[status,router])

  const [page,setPage]=useState(0)
  const [check,setCheck]=useState(undefined)
  const [displayErr,setDE]=useState(false)
  // const [result,setResult]=useState([])
  // let obj=[]

  const resultref=useRef([]);

  async function nextPage(){

    const l=resultref.current.length
    const e=(page+1)*10

    if(l%e!==0){
      setDE(true)
      return;
    }

    if(page==4){
      await axios.post("/api/createOutput",resultref.current)
      return;
    }

    if(page!=4){ 
      setCheck(false)
      setTimeout(()=>{
        setPage(page+1);
        setCheck(undefined)
      },100)
    }
  }

  function LinearSearch(newObj){

    let arr=resultref.current

    for(let i=0;i<arr.length;i++){
      if(arr[i].Qtype===newObj.Qtype){
        return true;
      }
    }

    return false;
  }

  function handleSelect(newObj){

    let obj=[...resultref.current]
    if(LinearSearch(newObj)){
      obj=obj.filter(x=>x.Qtype!==newObj.Qtype) 
    }

    resultref.current=[...obj,newObj]
    console.log(resultref.current)
  }
 
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>

      <ValContext.Provider value={{displayErr,setDE}}>
        <PopUp/>
      </ValContext.Provider>

      <div className="w-full min-h-56 bg-[#33A474] mt-28 text-white text-3xl text-center pt-12 font-bold">Personality Test</div>

      <div className="flex justify-evenly">
        <div className="w-1/4 min-h-52 bg-[#D8E9EF] mt-6">
          <Image src={img1} alt="" className="w-1/4 mx-auto"/>
          <h1 className="text-center font-bold text-2xl mt-2">Complete the Test</h1>
          <p className="text-base text-center">Be yourself and answer honestly to find out your personality type.</p>
        </div>

        <div className="w-1/4 min-h-40 bg-[#ECE5D5] mt-6">
          <Image src={img2} alt="" className="w-1/4 mx-auto"/>
          <h1 className="text-center font-bold text-2xl mt-2">View Detailed Results</h1>
          <p className="text-base text-center">Learn how your personality type influences many areas of your life.</p>
        </div>

        <div className="w-1/4 min-h-40 bg-[#EDDEF4] mt-6">
          <Image src={img3} alt="" className="w-1/4 mx-auto"/>
          <h1 className="text-center font-bold text-2xl mt-2">Unlock Your Potential</h1>
          <p className="text-base text-center">Grow into the person you want to be</p>
        </div>

      </div>

      {/* the below component be the quiz component */}

      <div className="mt-8 min-w-full min-h-[60%] ">
        <RadioButtons Qtype={questions[page][0].Qtype} title={questions[page][0].question} idtag="a" onSelect={handleSelect} checked={check}/>
        <RadioButtons Qtype={questions[page][1].Qtype} title={questions[page][1].question} idtag="b" onSelect={handleSelect} checked={check}/>
        <RadioButtons Qtype={questions[page][2].Qtype} title={questions[page][2].question} idtag="c" onSelect={handleSelect} checked={check}/>
        <RadioButtons Qtype={questions[page][3].Qtype} title={questions[page][3].question} idtag="d" onSelect={handleSelect} checked={check}/>
        <RadioButtons Qtype={questions[page][4].Qtype} title={questions[page][4].question} idtag="e" onSelect={handleSelect} checked={check}/>
        <RadioButtons Qtype={questions[page][5].Qtype} title={questions[page][5].question} idtag="f" onSelect={handleSelect} checked={check}/>
        <RadioButtons Qtype={questions[page][6].Qtype} title={questions[page][6].question} idtag="g" onSelect={handleSelect} checked={check}/>
        <RadioButtons Qtype={questions[page][7].Qtype} title={questions[page][7].question} idtag="h" onSelect={handleSelect} checked={check}/>
        <RadioButtons Qtype={questions[page][8].Qtype} title={questions[page][8].question} idtag="i" onSelect={handleSelect} checked={check}/>
        <RadioButtons Qtype={questions[page][9].Qtype} title={questions[page][9].question} idtag="j" onSelect={handleSelect} checked={check}/>
      </div>

      <div className="flex justify-center mt-4 mb-6">
        <ButtonCard content="Next" color="red" w="8" onClick={()=>nextPage()}/>
      </div>
      

    </div>
  
  )
}

