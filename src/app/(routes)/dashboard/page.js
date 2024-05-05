import { options } from "@/app/api/auth/[...nextauth]/options";
import { personality } from "@/assets/img_index";
import { ButtonCard, Navbar } from "@/components";
import { ConnectDB, DisconnectDB } from "@/db/dbConnect";
import Test from "@/models/test";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
export default async function Page() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/");
  }

  if (session.user.role !== "company") {
    redirect("/");
  }

  await ConnectDB();
  const tests = await Test.find({});
  await DisconnectDB();

  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-24 bg-[#E0D8C6]">
        <Image className="w-1/2 " src={personality} alt="" />
      </div>

      <div className="mt-6 text-center text-2xl">
        Streamline your hiring process with Personiphy!
        <br />
        Gain deeper insights into candidate personalities to find the perfect
        fit for your team.
      </div>

      <div className="grid place-items-center mt-8">
        <Link href={"/dashboard/create"}>
          <ButtonCard content="Create test" color="#0DD299" w="10" />
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center mt-24">Current Tests</h1>
      <div className="">
        {tests.length > 0 ? (
          <div className="grid grid-cols-1 place-items-center gap-y-4 mt-8 mb-24 cursor-pointer">
            {tests.map((value) => (
              <Link
                key={value._id}
                className="text-xl font-semibold border border-gray-500 w-[500px] text-center py-2"
                href={`/dashboard/results/${value._id}`}
              >
                {value.name}
              </Link>
            ))}
          </div>
        ) : (
          <h1 className="text-2xl font-semibold text-center my-24">
            No tests found
          </h1>
        )}
      </div>
    </>
  );
}
