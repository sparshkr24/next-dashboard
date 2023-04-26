import Head from "next/head";
import Link from 'next/link';
import { useSession, signIn, getSession } from 'next-auth/react'
import Image from "next/image";

export default function Home() {
  const {data: session, status} = useSession();
  
  return (
    <>
      <div className="flex flex-col h-screen sm:flex-row">
        <Head>
          <title>Sign In</title>
        </Head>
        <div
          id="Left_side"
          className="w-full sm:w-2/5 bg-black h-24 sm:h-full flex items-center justify-center"
        >
          <h1 className="text-white text-center text-3xl sm:text-5xl font-bold hover:cursor-pointer hover:text-[#FFFF00]">BOARD.</h1>
        </div>
        <div
          id="Right_side"
          className="w-full sm:w-3/5 bg-gray-100 h-full flex items-center justify-center"
        >
          <div className="">
            <h2 className="text-4xl font-bold mb-1 text-gray-800">Sign In</h2>
            <p className="text-l font-normal text-black mb-4">Sign into your account</p>
            <div className="flex mb-6">
              <button
                onClick={() => signIn('google')}
                id="Google"
                className="bg-white py-1.5 px-3 rounded-lg mr-6 flex items-center hover:shadow-md hover:ring-4 hover:ring-blue-500"
              >
                <Image src="/google-logo.svg" className="mx-3" alt="google-svg" width={16} height={16} />
                <p className="text-[#858585]"> Sign in with Google </p>
              </button>
              <button
                id="Apple"
                className="bg-white py-1 px-3 rounded-lg flex items-center"
              >
                <Image src="/apple-logo.svg" className="mx-3" alt="apple-logo" width={16} height={16}/>
                <p className="text-[#858585]"> Sign in with Apple </p>
              </button>
            </div>
            {/* actual form */}
            <div className="w-2/3 w-full max-w-lg p-8 bg-white rounded-2xl shadow-lg">
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
                    className="appearance-none border rounded-xl w-full py-2 px-3 leading-tight bg-gray-100 focus:bg-gray-200"
                    placeholder="Email address"
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
                    className="appearance-none border rounded-xl w-full py-2 px-3 leading-tight bg-gray-100 focus:bg-gray-200"
                    placeholder="Password"
                  />
                </div>
              </form>
              <Link href="/" className="text-blue-600"> Forgot password? </Link>
              <button className="bg-black text-white w-full py-2.5 rounded-xl mt-4">Sign In</button>
            </div>
            <div className="flex justify-center items-center p-5">
              <span>Don&apos;t have an account? </span>
              <span onClick={()=> signIn('google')} className="text-blue-600 pl-1 hover:cursor-pointer hover:underline"> Register here</span>
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