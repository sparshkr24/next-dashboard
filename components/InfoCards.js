import Image from "next/image";
import React from "react";

const InfoCards = ({ heading, value, color, image }) => {
  return (
    <>
      <div className={`inline-block my-4 w-56 h-28 ${color} px-4 pr-4 rounded-2xl `}>
        <div className="flex justify-end pt-4 pr-4">
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