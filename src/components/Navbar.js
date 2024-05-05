"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Kaushan_Script } from "next/font/google";
import Link from "next/link";
import ButtonCard from "./ButtonCard";
const ks = Kaushan_Script({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const { data: session } = useSession({});

  return (
    <div className="flex justify-between bg-white fixed w-full pb-4">
      {/* this is the Header/Navbar */}
      <div className={`mt-9 ml-10 text-3xl ${ks.className}`}>
        <Link href="/">Personiphy</Link>
      </div>

      <div className="flex mt-10 ml-20">
        <div className="mx-8 text-xl">About Us</div>
        <div className="mx-8 text-xl">Teams</div>
        <div className="mx-8 text-xl">Contact</div>
      </div>

      <div className="flex mt-8">
        {session ? (
          <>
            <div className="mx-8 text-center py-3 font-bold text-lg">
              {session.user.name}
            </div>
            <ButtonCard
              onClick={() => signOut()}
              content="Logout"
              color="#0DD299"
              w="6.5"
            />
          </>
        ) : (
          <>
            {/* <Link href="/api/auth/signin">
              <ButtonCard content="Login" color="#0DD299" w="6.5" />
            </Link> */}
            <ButtonCard
              onClick={() => signIn("google")}
              content="Login"
              color="#0DD299"
              w="6.5"
            />
          </>
        )}
      </div>
    </div>
  );
}
