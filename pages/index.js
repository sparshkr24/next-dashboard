import Head from "next/head";
import Link from 'next/link';
import { useSession, signIn, getSession } from 'next-auth/react'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const {data: session, status} = useSession();
  const [data, setData] = useState({
    Email: "johndoe@gmail.com",
    Password: "••••••••"
  })
  const onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  
  return (
    <>
      <div className="flex flex-col h-screen sm:flex-row">
        <Head>
          <title>Sign In</title>
        </Head>
        <div
          id="Left_side"
          className="w-full sm:w-2/5 bg-black h-24 sm:h-screen flex items-center justify-center"
        >
          <h1 className="text-white text-3xl sm:text-5xl font-black hover:text-[#FFFF00] monsterrat">BOARD.</h1>
        </div>
        <div
          id="Right_side"
          className="w-full px-3 sm:w-3/5 bg-[#F5F5F5;] h-full flex items-center justify-center"
        >
          <div className="">
            <h2 className="text-[28px] sm:text-[36px] font-bold mb-1 monsterrat">Sign In</h2>
            <p className="text-[16px] font-normal text-black mb-4 lato">Sign into your account</p>
            <div className="flex justify-between mb-6">
              <button
                onClick={() => signIn('google')}
                id="Google"
                className="bg-white py-1.5 px-3 rounded-lg mr-6 flex items-center hover:shadow-md hover:ring-4 hover:ring-blue-500"
              >
                <Image src="/google-logo.svg" className="mx-3" alt="google-svg" width={16} height={16} />
                <div className="px-3 sm:px-0 text-[#858585] text-[16px] sm:text-[12px]"> <span className="hidden sm:inline"> Sign in with </span> <span> Google </span></div>
              </button>
              <button
                id="Apple"
                className="bg-white py-1 px-3 rounded-lg flex items-center"
              >
                <Image src="/apple-logo.svg" className="mx-3" alt="apple-logo" width={16} height={16}/>
                <div className="px-3 sm:px-0 text-[#858585] text-[16px] sm:text-[12px]"> <span className="hidden sm:inline"> Sign in with </span> <span> Apple </span></div>
              </button>
            </div>
            {/* actual form */}
            <div className="w-2/3 w-full max-w-lg p-8 bg-white rounded-2xl shadow-lg lato">
              <form className="text-black">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block font-normal mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name = "Email"
                    className="appearance-none border rounded-xl w-full py-2 px-3 leading-tight bg-gray-100 focus:bg-gray-200"
                    value={data.Email}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block font-normal mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="Password"
                    className="appearance-none border rounded-xl w-full py-2 px-3 leading-tight bg-gray-100 focus:bg-gray-200"
                    value = {data.Password}
                    onChange={onChange}
                  />
                </div>
              </form>
              <Link href="/" className="text-blue-600"> Forgot password? </Link>
              <button className="bg-black text-[16px] text-white w-full py-2.5 rounded-xl mt-4 monsterrat font-semibold">Sign In</button>
            </div>
            <div className="flex justify-center items-center p-5 lato">
              <span className="text-[#858585]">Don&apos;t have an account? </span>
              <span onClick={()=> signIn('google')} className="text-[#346BD4] pl-1 hover:cursor-pointer hover:underline"> Register here</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session && session.user) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}