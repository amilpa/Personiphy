export default function Profile(){
    return(
        <div className="min-h-screen flex justify-center items-center bg-[#F0F0F0]">
            <div className="w-3/4 h-[600px] flex flex-col items-center text-2xl py-4 bg-white rounded-3xl">
                <div className="mb-6">Your Traits</div>

                <div className="flex flex-col w-full h-1/5 items-center text-xl">
                    Openess

                    <div className="flex w-full h-full justify-center ">
                        <div className="pt-4 pr-4">LOW</div>
                        <div className="w-5/6 mt-4 h-7 border-2 rounded-xl bg-[#1E5A8D]">
                            <div className="h-full w-6 rounded-full border-4 border-white relative left-[50%]"></div>
                        </div>
                        <div className="pt-4 pl-4">HIGH</div>
                    </div>

                </div>

                <div className="flex flex-col w-full h-1/5 items-center text-xl">
                    Conscientiousness

                    <div className="flex w-full h-full justify-center ">
                        <div className="pt-4 pr-4">LOW</div>
                        <div className="w-5/6 mt-4 h-7 border-2 rounded-xl bg-[#73A444]">
                            <div className="h-full w-6 rounded-full border-4 border-white"></div>
                        </div>

                        <div className="pt-4 pl-4">HIGH</div>
                    </div>

                </div>

                <div className="flex flex-col w-full h-1/5 items-center text-xl">
                    Extraversion

                    <div className="flex w-full h-full justify-center ">
                        <div className="pt-4 pr-4">LOW</div>
                        <div className="w-5/6 mt-4 h-7 border-2 rounded-xl bg-[#E7801B]">
                            <div className="h-full w-6 rounded-full border-4 border-white"></div>
                        </div>
                        <div className="pt-4 pl-4">HIGH</div>
                    </div>

                </div>


                <div className="flex flex-col w-full h-1/5 items-center text-xl">
                    Agreeableness

                    <div className="flex w-full h-full justify-center ">
                        <div className="pt-4 pr-4">LOW</div>
                        <div className="w-5/6 mt-4 h-7 border-2 rounded-xl bg-[#D03132]">
                            <div className="h-full w-6 rounded-full border-4 border-white"></div>
                        </div>
                        <div className="pt-4 pl-4">HIGH</div>
                    </div>

                </div>

                <div className="flex flex-col w-full h-1/5 items-center text-xl">
                    Neuroticism

                    <div className="flex w-full h-full justify-center ">
                        <div className="pt-4 pr-4">LOW</div>
                        <div className="w-5/6 mt-4 h-7 border-2 rounded-xl bg-[#852165]">
                            <div className="h-full w-6 rounded-full border-4 border-white"></div>
                        </div>
                        <div className="pt-4 pl-4">HIGH</div>
                    </div>

                </div>




            </div>
        </div>
    )
}