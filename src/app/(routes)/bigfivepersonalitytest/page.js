"use client"
import { RadioButtons,Navbar,ButtonCard } from "../../../components/index"
import { img1,img2,img3 } from "../../../assets/img_index"
import Image from "next/image"
import {questions} from "./questions"
import {useEffect, useState} from "react"
import { useSession} from "next-auth/react"
import { useRouter } from "next/navigation"
import {Kaushan_Script} from "next/font/google";
const ks=Kaushan_Script({subsets:["latin"],weight:"400"})
import Link from "next/link"
// import { options } from "@/app/api/auth/[...nextauth]/options"

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
  const [result,setResult]=useState([])
  // let obj=[]

  function nextPage(){
    if(page!=4){ //the 2nd condition is to make sure everything is selected
      setCheck(false)
      setTimeout(()=>{
        setPage(page+1);
        setCheck(undefined)
      },100)
    }
  }

  function LinearSearch(newObj){

    for(let i=0;i<result.length;i++){
      if(result[i].title===newObj.title){
        return true;
      }
    }

    return false;
  }

  function handleSelect(newObj){

    let obj=result
    if(LinearSearch(newObj)){
      obj=obj.filter(x=>x.title!==newObj.title)
    }

    setResult([...obj,newObj]);
    console.log(result)
  }
 
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between bg-white fixed w-full pb-4">{/* this is the Header/Navbar */}

      <Link href="/">
        <div className={`mt-9 ml-10 text-3xl ${ks.className}`}>
          Personiphy
        </div>
      </Link>

        <div className="flex mt-10 ml-20">
          <div className="mx-8 text-xl">About Us</div>
          <div className="mx-8 text-xl" >Teams</div>
          <div className="mx-8 text-xl">Contact</div>
        </div>

        <div className="flex mt-8">
          {
          session ?
            <>
              <div className="mx-8 text-center py-3 font-bold text-lg">{session.user.name}</div>
              <Link href="/api/auth/signout"><ButtonCard content="Logout" color="#0DD299" w="6.5"/></Link>
            </>
            :
            <>
              {/* <div className="mx-8 text-center py-3 font-bold text-lg">Login</div> */}
              <Link href="/api/auth/signin"><ButtonCard content="Login" color="#0DD299" w="6.5"/></Link> 
              {/* <Link href="/api/auth/register"><ButtonCard content="Register" color="#0DD299" w="6.5"/></Link> */}
            </>
          }
      
        </div>

      </div>

      <div className="w-full min-h-56 bg-[#33A474] mt-28 text-white text-3xl text-center pt-12 font-bold">Personality Test {session?.user?.email}</div>

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
        <RadioButtons title={questions[page].one} idtag="a" onSelect={handleSelect} checked={check}/>
        <RadioButtons title={questions[page].two} idtag="b" onSelect={handleSelect} checked={check}/>
        <RadioButtons title={questions[page].three} idtag="c" onSelect={handleSelect} checked={check}/>
        <RadioButtons title={questions[page].four} idtag="d" onSelect={handleSelect} checked={check}/>
        <RadioButtons title={questions[page].five} idtag="e" onSelect={handleSelect} checked={check}/>
        <RadioButtons title={questions[page].six} idtag="f" onSelect={handleSelect} checked={check}/>
        <RadioButtons title={questions[page].seven} idtag="g" onSelect={handleSelect} checked={check}/>
        <RadioButtons title={questions[page].eight} idtag="h" onSelect={handleSelect} checked={check}/>
        <RadioButtons title={questions[page].nine} idtag="i" onSelect={handleSelect} checked={check}/>
        <RadioButtons title={questions[page].ten} idtag="j" onSelect={handleSelect} checked={check}/>
      </div>

      <div className="flex justify-center mt-4 mb-6">
        <ButtonCard content="Next" color="red" w="8" onClick={()=>nextPage()}/>
      </div>
      

    </div>
  
  )
}
