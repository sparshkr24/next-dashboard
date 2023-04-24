import Head from "next/head";
import SVG from "react-svg";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <Head>
          <title>Sign In</title>
        </Head>
        <div
          id="Left_side"
          className="w-2/5 bg-black flex items-center justify-center"
        >
          <h1 className="text-white text-center text-5xl font-bold">BOARD.</h1>
        </div>
        <div
          id="Right_side"
          className="w-3/5 bg-gray-100 flex items-center justify-center"
        >
          <div className="">
            <h2 className="text-4xl font-bold mb-1 text-gray-800">Sign In</h2>
            <p className="text-l font-normal text-black mb-4">Sign into your account</p>
            <div className="flex mb-8">
              <button
                id="Google"
                className="bg-white py-1 px-3 rounded-lg mr-6 flex items-center"
              >
                {/* svg for google logo
                <SVG
                  src="../public/vercel.svg"
                  width="46"
                  height="46"
                /> */}
                <p className="text-gray-600"> Sign in with Google </p>
              </button>
              <button
                id="Apple"
                className="bg-white py-1 px-3 rounded-lg mr-4 flex items-center"
              >
                {/* svg for apple logo
                <SVG
                  src="../public/vercel.svg"
                  width="46"
                  height="46"
                /> */}
                <p className="text-gray-600"> Sign in with Apple </p>
              </button>
            </div>
            {/* actual form */}
            <div className="w-2/3 w-full max-w-lg p-6 bg-white rounded-2xl shadow-lg">
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
              <Link href="/" className="text-blue-600"> Forgot password? </Link> <br/>
              <button className="bg-black text-white w-full py-2.5 rounded-xl my-2.5">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
