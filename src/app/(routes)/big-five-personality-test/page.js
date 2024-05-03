"use client"
import { RadioButtons,Navbar,ButtonCard } from "../../../components/index"
import { img1,img2,img3 } from "../../../assets/img_index"
import Image from "next/image"
import {questions} from "./questions"
import {useState} from "react"
// import { useSession } from "next-auth/react"

export default function big5PersonalityTequestions(){

  // const {data:session}=useSession({
  //   required:true,
  //   onUnauthenticated(){
  //       redirect("/api/auth/signin?callbackUrl=/big-five-personality-test")
  //   }
  // })

  const [page,setPage]=useState(0)
  const [check,setCheck]=useState(undefined)
  const [result,setResult]=useState([])

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
      obj=result.filter(x=>{
        x.title!==newObj.title
      })

      setResult([...obj,newObj])
      console.log(result)
      return;
    }

    setResult([...obj,newObj]);
    console.log(result)
  }
 
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
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

