import { useSession, signOut } from "next-auth/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const { data: session } = useSession();

  //   options for date range drop down Menu
  const date_object = [
    { value: "May - June 2023", label: "May-June 2023" },
    { value: "June - July 2023", label: "June-July 2023" },
    { value: "July - Aug 2023", label: "July-Aug 2023" },
  ];

  return (
    <>
      <div className="flex h-screen bg-gray-100 ">
        {/* Left side bar */}
        <div
          id="Left_side"
          className="flex flex-col items-left justify-between w-1/5 bg-black text-white rounded-3xl my-8 ml-10 mr-6 p-10"
        >
          <div className="">
            <div className="mt-6 mb-10">
              <Link href="/" className="font-bold text-3xl">
                Board.
              </Link>
            </div>
            <div className="font-semibold hover:underline active:font-bold hover:cursor-pointer text-md my-6">
              {" "}
              <Image
                src="/dashboard.jpg"
                alt="Dashboard"
                width={20}
                height={20}
                className="inline mr-2"
              />{" "}
              Dashboard
            </div>
            <div className="font-medium hover:underline active:font-bold hover:cursor-pointer text-md my-6">
              <Image
                src="/transaction.jpg"
                alt="Dashboard"
                width={20}
                height={20}
                className="inline mr-2"
              />
              Transactions
            </div>
            <div className="font-medium hover:underline active:font-bold hover:cursor-pointer text-md my-6">
              <Image
                src="/schedule.jpg"
                alt="Dashboard"
                width={20}
                height={20}
                className="inline mr-2"
              />
              Schedules
            </div>
            <div className="font-medium hover:underline active:font-bold hover:cursor-pointer text-md my-6">
              <Image
                src="/users.jpg"
                alt="Dashboard"
                width={20}
                height={20}
                className="inline mr-2"
              />
              Users
            </div>
            <div className="font-medium hover:underline active:font-bold hover:cursor-pointer text-md my-6">
              <Image
                src="/setting.jpg"
                alt="Dashboard"
                width={20}
                height={20}
                className="inline mr-2"
              />
              Settings
            </div>
          </div>
          <div>
            <p className="text-gray-300 text-sm my-3">Help</p>
            <p className="text-gray-300 text-sm my-3">Contact Us</p>
          </div>
        </div>

        {/* Right side bar */}
        <div id="Right_side" className="w-4/5 py-10 ml-6 mr-16 h-screen">
          <div id="navbar" className="flex items-center justify-between">
            <div id="logo" className="font-extrabold text-2xl hover:cursor-pointer">
              Dashboard
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between bg-white px-4 py-1 rounded-xl ">
                  <input
                    placeholder="Search"
                    className=" outline-none"
                  />
                    <Image
                        src="/search-icon.svg"
                        className="ml-4 hover:cursor-pointer"
                        alt="notifications"
                        width={20}
                        height={20}
                    ></Image>
                </div>
                <Image
                  src="/bell.jpg"
                  className="ml-4 hover:cursor-pointer"
                  alt="notifications"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
          </div>

          {/* INFO CARDS */}
          <div id="Info_cards" className="flex justify-between my-8">
            <div className="flex flex-col justify-center items-center rounded-2xl bg-emerald-100 w-56 h-28">
              <p className="font-normal">Total Revenue</p>
              <p className="font-extrabold">$2,156,870</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-2xl bg-orange-100 w-56 h-28">
              <p className="font-normal">Total Transactions</p>
              <p className="font-extrabold">$2,156,870</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-2xl bg-red-100 w-56 h-28">
              <p className="font-normal">Total Likes</p>
              <p className="font-extrabold">$2,156,870</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-2xl bg-violet-100 w-56 h-28">
              <p className="font-normal">Total Users</p>
              <p className="font-extrabold">$2,156,870</p>
            </div>
          </div>

          {/* Activity */}
          <div id="Activity" className="w-full h-72 bg-white rounded-2xl p-6">
            <div id="Subheader" className="flex justify-between">
              <div className="text-lg font-bold">Activities</div>
              <div>
                <div className="rounded-2xl bg-red-300 w-2 h-2 inline-block mr-2"></div>
                <p className="inline mr-8">Guest</p>
                <div className="rounded-2xl bg-emerald-300 w-2 h-2 inline-block mr-2"></div>
                <p className="inline mr-8">User</p>
              </div>
            </div>
            <div id="Drop_down" className="w-32">
              <select className="rounded-lg text-gray-600 font-normal border-none">
                {date_object.map((item, index) => (
                  <option key={index}>{item.value}</option>
                ))}
              </select>
            </div>

            {/* Actual chart */}
            <div id="Chart"></div>
          </div>

          {/* Remaining Cards */}
          <div id="Remaining_cards" className="flex justify-between py-10">

            {/* left card */}
            <div className="w-1/2 h-44 bg-white mr-6 rounded-2xl p-6">
              <div
                id="Sub_heading_products"
                className="flex justify-between items-center"
              >
                <div className="font-bold text-lg">Top products</div>
                <div>
                  <select className="rounded-lg text-gray-600 font-normal border-none">
                    {date_object.map((item, index) => (
                      <option key={index}>{item.value}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div id="Pie_chart" className="bg-black w-16 h-16"></div>
                <div id="Info_data" className="bg-black w-16 h-16"></div>
              </div>
            </div>

            {/* Right card */}
            <div className="w-1/2 h-44 bg-white ml-6 rounded-2xl p-6">
                {/* subheading */}
              <div className="flex justify-between pb-3">
                <div className="font-bold text-lg">Today's schedule</div>
                <div className="font-normal text-sm text-gray-400 inline hover:cursor-pointer">
                  See all {""}
                  <Image
                    src={"/chevron-right-solid.svg"}
                    className="inline"
                    alt="RA"
                    width={8}
                    height={8}
                  />{" "}
                </div>
              </div>

              {/* data field 1 */}
                <div className="flex items-center justify-left mb-4">
                    <div className="h-12 w-0.5 bg-[#9BDD7C] mr-2"></div>
                    <div>
                        <p className="font-bold text-[#666666] leading-4 text-sm">Meeting with suppliers from Kuta Bali </p>
                        <p className="font-normal text-[#999999] leading-4 text-xs">14.00 - 15.00</p>
                        <p className="font-normal text-[#999999] leading-4 text-xs">at Sunset Road, Kuta Bali </p>
                    </div>
                </div>

                {/* data field 2 */}
                <div className="flex items-center justify-left">
                    <div className="h-12 w-0.5 bg-[#9BDD7C] mr-2"></div>
                    <div>
                        <p className="font-bold text-[#666666] leading-4 text-sm">Meeting with suppliers from Kuta Bali </p>
                        <p className="font-normal text-[#999999] leading-4 text-xs">14.00 - 15.00</p>
                        <p className="font-normal text-[#999999] leading-4 text-xs">at Sunset Road, Kuta Bali </p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
