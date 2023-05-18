import React from "react";

const DataFields = ({title, time, place, color}) => {
  return (
    <>
      <div className="flex items-center justify-left mb-4 lato">
        <div className={`h-16 w-1 ${color} mr-2`}></div>
        <div>
          <p className="font-bold text-[#666666] leading-4 text-sm pb-2">
            {title}
          </p>
          <p className="font-normal text-[#999999] leading-4 text-xs pb-1">
            {time}
          </p>
          <p className="font-normal text-[#999999] leading-4 text-xs pb-2">
            {place}
          </p>
        </div>
      </div>
    </>
  );
};

export default DataFields;
