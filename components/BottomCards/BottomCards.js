import Image from "next/image";
import React from "react";
import DataFields from "./DataFields";
import{
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

import { Pie } from 'react-chartjs-2';
   
ChartJS.register({
  ArcElement,
  Tooltip,
  Legend
})

const BottomCards = ({date_object}) => {

    const schedule_object = [
        {title: "Meeting with suppliers from Kuta Bali", time: "14.00-15.00", place: "at Sunset Road, Kuta Bali", color: "bg-[#9BDD7C]"},
        {title: "Chief operation at Giga factory 1", time: "18.00-20.00", place: "At Central Jakarta", color: "bg-[#6972C3]"},
    ];

    const data = {
      labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
      datasets: [
        {
          data: [55, 31, 14],
          backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
          hoverBackgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
        },
      ],
    };
    const options={
      plugins: {
        legend: {
          display: false
        }
      }
    }

    const TopProductsCard = ()=>{
      return (
        <div
          id="Sub_heading_products"
          className="flex justify-between items-center mb-4"
        >
          <div className="font-bold text-lg">Top products</div>
          <div>
            <select className="rounded-lg text-gray-600 font-normal border-none hover:cursor-pointer">
              {date_object.map((item, index) => (
                <option key={index}>{item.value}</option>
              ))}
            </select>
          </div>
        </div>
      )
    }

  return (
    <>
      {/* Top product's card */}
      <div className=" bg-white flex-1 sm:mr-8 rounded-2xl pt-6 mb-8 sm:mb-0 px-10">
        
        {TopProductsCard()}

        <div className="lg:flex justify-evenly items-center">
          <div id="Pie_chart" className="h-32 mb-6 lg:mb-0 ">
              <Pie data={data} options={options}/>
          </div>
          <div id="Info_data" className="">
            <div className="rounded-2xl bg-[#98D89E] w-2 h-2 inline-block mr-2"></div> <span className="font-bold">Basic Tees</span> <p className="text-[#858585] pb-2 pl-5 text-sm">55%</p>
            <div className="rounded-2xl bg-[#EE8484] w-2 h-2 inline-block mr-2"></div> <span className="font-bold">Custom Short Pants</span> <p className="text-[#858585] pb-2 pl-5 text-sm">31%</p>
            <div className="rounded-2xl bg-[#F6DC7D] w-2 h-2 inline-block mr-2"></div> <span className="font-bold">Super Hoodies</span> <p className="text-[#858585] pb-2 pl-5 text-sm">14%</p>
          </div>
        </div>
      </div>

      {/* Today's schedule card */}
      <div className=" bg-white rounded-2xl flex-1 pt-6 px-10">
        {/* subheading */}
        <div className="flex justify-between pb-3">
          <div className="font-bold text-lg">Today&apos;s schedule</div>
          <div className="font-normal text-sm text-gray-400 inline hover:cursor-pointer">
            See all {""}
            <Image
              src={"/arrow.svg"}
              className="inline"
              alt="RA"
              width={8}
              height={8}
            />{" "}
          </div>
        </div>

        {/* data fields */}
        {
          schedule_object.map((item, index)=>{
            return <DataFields key={index} title={item.title} time={item.time} place={item.place} color={item.color} />
          })
        }
        
      </div>
    </>
  );
};

export default BottomCards;
