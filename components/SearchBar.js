import Image from "next/image";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import HamburgerMenu from "./HamburgerMenu";

import ham from "../public/ham.svg";

const SearchBar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // console.log(session.user.image);

  return (
    <>
      <div id="navbar" className="flex items-center justify-between px-2">
        <div id="logo" className="font-extrabold text-2xl hover:cursor-pointer">
          Dashboard
        </div>

        <div className="lg:hidden">
          {/* hamburger menu start */}
          <button onClick={toggleMenu}>
            <Image src={ham} alt="hamburger" width={20} height={20} />
          </button>
          {/* hamburger menu end */}
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          {/* sidebar content */}
        </div>

        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center justify-center bg-white px-2 sm:px-4 py-1 rounded-xl ">
            <input
              placeholder="Search..."
              className=" outline-none text-[14px]"
            />
            <Image
              src="/search-icon.svg"
              className="ml-0 sm:ml-1 hover:cursor-pointer"
              alt="notifications"
              width={10}
              height={10}
            ></Image>
          </div>
          <Image
            src="/bell.svg"
            className="ml-10 hover:cursor-pointer"
            alt="notifications"
            width={18}
            height={20}
          ></Image>
          <img
            onClick={() => signOut()}
            src={session?.user.image}
            className="rounded-full w-[26px] h-[26px] ml-10 hover:cursor-pointer hover:shadow-md hover:scale-150 ease-in-out duration-300 hover:ring-2 hover:ring-blue-500"
            alt="profile-pic"
          ></img>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
