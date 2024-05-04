export default function RadioButtons({Qtype,title,idtag,onSelect,checked}){

    const getObjVal=(value)=>{
        onSelect({Qtype:Qtype,Ans:value});
    }


    return(
        <>
            <div className="text-center font-semibold text-2xl mt-6">{title}</div>
            <div className="flex justify-center my-8 ">

            <div className="text-xl pt-4">Disagree</div>
            {
            [1, 2, 3, 4, 5].map((optionValue) => (
                <label key={`opt${optionValue}${idtag}`} htmlFor={`opt${optionValue}${idtag}`} className="w-14 h-14 rounded-full border-2 border-black mx-4 flex justify-center items-center">
                    <input type="radio" id={`opt${optionValue}${idtag}`} name={`options${idtag}`} value={optionValue} className="peer hidden" onChange={() => getObjVal(optionValue)} checked={checked}/>
                    <span className="hidden w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full bg-[#222] peer-checked:inline-block"></span>
                </label>
            ))}
            <div className="block text-xl pt-4">Agree</div>
        </div>  
    </> 
    )
}
