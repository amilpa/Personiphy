"use client";
import { personality } from "@/assets/img_index";
import { ButtonCard, Navbar } from "@/components";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
export default function Page() {
  const { data: session, status } = useSession({});
  const router = useRouter();
  const ref = useRef(null);
  const [testname, setTestname] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (status === "loading") {
      return () => {
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>;
      };
    }
    if (!session) {
      router.push("/");
    }

    if (session && session.user.role !== "company") {
      router.push("/");
    }
  }, [session, status]);

  async function Submit() {
    const formData = new FormData();

    const file = ref.current.files[0];
    formData.append("testname", testname);
    formData.append("file", file);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_HOSTED_URL}/api/createTest`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setSuccess(true);
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-24 bg-[#E0D8C6]">
        <Image className="w-1/2 " src={personality} alt="" />
      </div>

      {success ? (
        <>
          <h1 className="text-4xl font-bold text-center mt-16">
            Test created successfully
          </h1>
          <div className="grid place-items-center mt-8">
            <Link href="/dashboard">
              <button className="bg-[#0DD299] text-white text-xl px-4 py-2 rounded-2xl font-semibold">
                Go to dashboard
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center mt-16">Create test</h1>
          <div className="w-[768px] m-auto mt-8 flex flex-col gap-8 mb-16">
            <input
              type="text"
              placeholder="Enter test name"
              value={testname}
              onChange={(e) => setTestname(e.target.value)}
              className="text-xl py-2 px-4 border border-gray-300 w-full"
            />
            <div className="flex flex-col gap-3">
              <label className="text-xl pl-4" htmlFor="excel">
                Enter candidate details
              </label>
              <input
                ref={ref}
                name="excel"
                type="file"
                placeholder="Enter test name"
                className="text-xl py-2 px-4 border border-gray-300 w-full"
              />
            </div>
            <ButtonCard onClick={Submit} content={"Submit"} color={"#0DD299"} />
          </div>
        </>
      )}
    </>
  );
}