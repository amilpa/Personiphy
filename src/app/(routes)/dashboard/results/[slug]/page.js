import { personality } from "@/assets/img_index";
import { Navbar } from "@/components";
import { ConnectDB, DisconnectDB } from "@/db/dbConnect";
import Test from "@/models/test";
import Image from "next/image";
export default async function Page({ params: { slug } }) {
  await ConnectDB();
  const results = await Test.findById(slug).populate("results");
  await DisconnectDB();

  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-24 bg-[#E0D8C6]">
        <Image className="w-1/2 " src={personality} alt="" />
      </div>
      <h1 className="text-4xl font-bold text-center mt-16">{results.name}</h1>

      {results.results.length > 0 ? (
        <div className="grid grid-cols-1 place-items-center gap-y-4 mt-8 mb-24 cursor-pointer">
          {results.results.map((value) => (
            <div key={value._id} className="border border-gray-500">
              <div className="flex justify-between gap-4 text-xl font-semibold w-[500px] text-center py-2 px-24">
                <p>Name:</p>
                <p>{value.name}</p>
              </div>
              <div className="flex justify-between gap-4 text-xl font-semibold w-[500px] text-center py-2 px-24">
                <p>Extroversion:</p>
                <p>{value.extroversion}</p>
              </div>
              <div className="flex justify-between gap-4 text-xl font-semibold w-[500px] text-center py-2 px-24">
                <p>Neurotic:</p>
                <p>{value.neurotic}</p>
              </div>
              <div className="flex justify-between gap-4 text-xl font-semibold w-[500px] text-center py-2 px-24">
                <p>Agreeable:</p>
                <p>{value.agreeable}</p>
              </div>
              <div className="flex justify-between gap-4 text-xl font-semibold w-[500px] text-center py-2 px-24">
                <p>Conscientious:</p>
                <p>{value.conscientious}</p>
              </div>
              <div className="flex justify-between gap-4 text-xl font-semibold w-[500px] text-center py-2 px-24">
                <p>Open:</p>
                <p>{value.open}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-2xl font-semibold text-center my-24">
          No results found
        </h1>
      )}
    </>
  );
}
