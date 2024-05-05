"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "../../../components/index";
import { RES } from "../bigfivepersonalitytest/page";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

export default function Profile() {
  const { data: session, status } = useSession({});
  const router = useRouter();
  const data = RES();

  console.log(data);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [session, status, router]);

  if (data === undefined) {
    router.push("/bigfivepersonalitytest");
    return;
  }

  return (
    <div className="flex flex-col min-h-screen min-w-full bg-[#191A1C]">
      <Navbar />

      <div className="flex w-full h-1/2 text-white mt-28 justify-evenly">
        <div className="flex flex-col w-2/5 h-2/5">
          {/**This is where the bar chart will be */}
          <h1 className="text-2xl block mx-auto my-4 font-bold">
            Your Personality Scores
          </h1>
          <BarChart interMData={data} />
        </div>

        <div className="flex flex-col w-2/5 h-2/5 items-center">
          <h1 className="text-2xl block mx-auto my-4 font-bold">
            Your Traits in Action
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            dignissimos accusantium eos pariatur voluptate voluptates asperiores
            nam delectus quibusdam eligendi et, quia est harum recusandae eaque
            itaque totam? Iusto debitis laudantium ipsum rerum. Deserunt quasi,
            quidem incidunt blanditiis corrupti itaque accusantium cum quas,
            quis provident quisquam odit. Ipsa id eos repellendus tempora
            laudantium eligendi animi minus, aliquid saepe quo sunt provident a
            asperiores libero nam in eius cupiditate? Tempora dolor aut, quia
            dignissimos, ex dicta incidunt voluptate excepturi recusandae,
            ratione ut. Id ratione sed, cupiditate quaerat magnam delectus?
            Labore possimus maiores soluta ducimus nam nobis. Soluta ullam
            recusandae dolorum quia ipsa excepturi, amet, velit consectetur,
            cupiditate repellat deleniti. Laborum libero labore totam rerum,
            magnam laudantium id! Accusamus qui saepe quas voluptatem atque
            veritatis, ab delectus id illum in quo eveniet ipsa deleniti
            praesentium veniam aut, eaque repudiandae eos. Qui est cupiditate
            dolorum alias facilis quibusdam sint rem! Amet, vero modi.
          </p>
        </div>
      </div>

      <div className="flex text-white mt-10 w-[40%]">
        <PieChart interMData={data} />
      </div>
    </div>
  );
}
