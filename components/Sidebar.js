import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = ({check}) => {
    console.log(check);
  return (
    <>
      <div
        id="Left_side"
        className="flex-col hidden lg:flex items-left justify-between w-full sm:w-1/5 bg-black text-white rounded-3xl my-8 ml-10 mr-6 p-10"
      >
        <div className="">
          <div className="mt-2 mb-10">
            <Link href="/" className="font-bold text-[36px]">
              Board.
            </Link>
          </div>
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
        <div>
          <p className="text-gray-300 text-sm my-3">Help</p>
          <p className="text-gray-300 text-sm my-3">Contact Us</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
