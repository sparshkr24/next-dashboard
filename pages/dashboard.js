import { useSession, signOut, getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import InfoCards from "@/components/InfoCards";
import SearchBar from "@/components/SearchBar";
import Activities from "@/components/Activities";
import BottomCards from "@/components/BottomCards/BottomCards";

const Dashboard = () => {
  const { data: session } = useSession();
  const [info_object, setInfoObject] = useState([])
  const [date_object, setDateObject] = useState([])

  //   options for date range drop down Menu
  useEffect(()=>{
    fetch(`https://next-dashboard-eosin.vercel.app/api/date`).then((result)=> result.json(result)).then((data)=>{
      setDateObject(data)
      console.log(data);
    }).catch(()=>{
      console.log('error while fetching date object');
    })
  }, [])

  useEffect(()=>{
    fetch(`https://next-dashboard-eosin.vercel.app/api/info`).then((result)=> result.json(result)).then((data)=>{
      setInfoObject(data)
      console.log(data);
    }).catch(()=>{
      console.log('error while fetching info object');
    })
  }, [])

  

  return (
    <>
      <div className="flex bg-gray-100 h-[100vh] overflow-y-auto">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right side */}
        <div id="Right_side" className="lg:w-4/5 w-full pt-8 pb-1 m-0 px-2 lg:ml-6 lg:mr-16">
          <SearchBar/>

          {/* INFO CARDS */}
          <div id="Info_cards" className="flex justify-evenly md:justify-between my-4 w-full flex-wrap pt-3">
           
                {info_object.map((item, index)=>{
                    return <InfoCards key={index} heading={item.heading} value={item.value} color={item.color} image={item.image} />
                })}
           
          </div>
        

          {/* Activity */}
          <div id="Activity" className="w-full bg-white rounded-2xl p-6 pb-2">
            <Activities date_object={date_object}/>
          </div>

          {/* Bottom Cards */}
          <div id="Remaining_cards" className="flex flex-col sm:flex-row justify-between pt-10 pb-4">
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
