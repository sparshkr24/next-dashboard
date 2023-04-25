import { useSession, signOut, getSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import InfoCards from "@/components/InfoCards";
import SearchBar from "@/components/SearchBar";
import Activities from "@/components/Activities";
import BottomCards from "@/components/BottomCards/BottomCards";

const Dashboard = () => {
  const { data: session } = useSession();

  //   options for date range drop down Menu
  const date_object = [
    { value: "May - June 2023", label: "May-June 2023" },
    { value: "June - July 2023", label: "June-July 2023" },
    { value: "July - Aug 2023", label: "July-Aug 2023" },
  ];

  const info_object = [
    {heading: "Total Revenue", value: "$2,156,870", color: "bg-emerald-100", image: "/revenue.svg"},
    {heading: "Total Transactions", value: "156,870", color: "bg-orange-100", image: "/transaction_card.svg"},
    {heading: "Total Likes", value: "856,870", color: "bg-red-100", image: "/likes.svg"},
    {heading: "Total Users", value: "56,870", color: "bg-violet-100", image: "/user_card.svg"},
  ]

  return (
    <>
      <div className="flex sm:h-screen bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right side */}
        <div id="Right_side" className="sm:w-4/5 w-full pt-10 pb-1 m-0 px-6 sm:ml-6 sm:mr-16 sm:h-screen">
          <SearchBar/>

          {/* INFO CARDS */}
          <div id="Info_cards" className="flex justify-between my-6 w-full overflow-x-scroll hide-scroll-bar overflow-hidden">
           
                {info_object.map((item, index)=>{
                    return <InfoCards key={index} heading={item.heading} value={item.value} color={item.color} image={item.image} />
                })}
           
          </div>
        

          {/* Activity */}
          <div id="Activity" className="w-full h-72 bg-white rounded-2xl p-6">
            <Activities date_object={date_object}/>
          </div>

          {/* Bottom Cards */}
          <div id="Remaining_cards" className="flex flex-col sm:flex-row justify-between pt-10 mb:py-10">
            <BottomCards date_object={date_object}/>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
    const session = await getSession(context)
  
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: {},
    }
  }


export default Dashboard;