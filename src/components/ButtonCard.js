export default function ButtonCard({content,color,w,onClick}) {
  return (
    <button style={{backgroundColor:color,width:`${w}rem`}} onClick={onClick} className={"mx-8 min-h-12 py-3 font-bold text-center text-base text-white rounded-3xl block"}>
        {content}
    </button>
  )
}

