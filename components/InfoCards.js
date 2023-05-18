import Image from "next/image";
import React from "react";

const InfoCards = ({ heading, value, color, image }) => {
  return (
    <>
      <div className={`w-44 lg:w-52 my-1 ${color} px-4 pb-4 rounded-2xl hover:shadow-xl hover:scale-105 hover:ease-in-out duration-200`}>
        <div className="flex justify-end pt-2 pr-4">
            <Image src={image} className="" alt="revenue-svg" width={24} height={24} />
        </div>
        <div className="text-left pl-2 pt-2">
            <p className="font-normal text-sm">{heading}</p>
            <p className="font-extrabold text-xl">{value}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default InfoCards;
