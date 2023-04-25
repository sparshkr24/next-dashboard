import Image from "next/image";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const SearchBar = () => {
    const {data: session} = useSession();
    // console.log(session.user.image);

  return (
    <>
      <div id="navbar" className="flex items-center justify-between">
        <div id="logo" className="font-extrabold text-2xl hover:cursor-pointer">
          Dashboard
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center  justify-between bg-white px-2 sm:px-4 py-1 rounded-xl ">
              <input placeholder="Search" className="hidden sm:flex outline-none" />
              <Image
                src="/search-icon.svg"
                className="ml-0 sm:ml-4 hover:cursor-pointer"
                alt="notifications"
                width={20}
                height={20}
              ></Image>
            </div>
            <Image
              src="/bell.svg"
              className="ml-10 hover:cursor-pointer"
              alt="notifications"
              width={24}
              height={24}
            ></Image>
            <img onClick={()=> signOut()} src={session?.user.image} className="rounded-full w-10 ml-10 hover:cursor-pointer hover:shadow-md hover:ring-4 hover:ring-blue-500" alt="profile-pic"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
