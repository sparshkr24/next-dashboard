import Image from "next/image";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";

import cross from "../public/cross.svg";
import Sidebar from "./Sidebar";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`${
          isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } p-5 fixed top-0 left-0 z-30 w-full overflow-y-auto bg-black border-r shadow-lg h-full transition duration-300 transform`}
      >
        <div className="flex justify-between items-center">
          <div className="font-bold text-[36px] text-white">Board</div>
          <div>
            <img
              onClick={() => signOut()}
              src={session?.user.image}
              className="inline rounded-full w-[28px] h-[28px] mr-6 hover:cursor-pointer hover:shadow-md hover:ring-4 hover:ring-blue-500"
              alt="profile-pic"
            ></img>
            <Image
              src={cross}
              onClick={toggleMenu}
              className="inline hover:cursor-pointer"
              alt="logo"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-start items-start">
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
        </div>

        {/* Sidebar content */}

        <div className="text-white">
          <div className="flex justify-start font-semibold hover:underline active:font-bold hover:cursor-pointer text-md my-6">
            {" "}
            <Image
              src="/dashboard.svg"
              alt="Dashboard"
              width={20}
              height={20}
              className="inline mr-[20px]"
            />{" "}
            <span className="font-[18px]">Dashboard</span>
          </div>
          <div className="flex justify-start font-medium hover:underline active:font-bold hover:cursor-pointer text-md my-6">
            <Image
              src="/transaction.svg"
              alt="Dashboard"
              width={20}
              height={20}
              className="inline mr-[20px]"
            />
            <span className="font-[18px]">Transactions</span>
          </div>
          <div className="flex justify-start font-medium hover:underline active:font-bold hover:cursor-pointer text-md my-6">
            <Image
              src="/schedule.svg"
              alt="Dashboard"
              width={20}
              height={20}
              className="inline mr-[20px]"
            />
            <span className="font-[18px]">Schedules</span>
          </div>
          <div className="flex justify-start font-medium hover:underline active:font-bold hover:cursor-pointer text-md my-6">
            <Image
              src="/user.svg"
              alt="Dashboard"
              width={20}
              height={20}
              className="inline mr-[20px]"
            />
            <span className="font-[18px]">Users</span>
          </div>
          <div className="flex justify-start font-medium hover:underline active:font-bold hover:cursor-pointer text-md my-6">
            <Image
              src="/setting.svg"
              alt="Dashboard"
              width={20}
              height={20}
              className="inline mr-[20px]"
            />
            <span className="font-[18px]">Settings</span>
          </div>
        </div>
        {/* Sidebar content */}
      </div>
    </>
  );
};

export default HamburgerMenu;
