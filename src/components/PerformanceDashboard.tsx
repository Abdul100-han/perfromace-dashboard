import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { performaceDashboardData } from "../constants/data";

const PerformanceDashboard = () => {
  return (
    <div className=" w-[100vw] items-center flex flex-col  mb-10">
      <div className="flex flex-col items-center p-6 text- border-2 justify-center w-[500px] border-gray-300 mt--6 rounded-xl">
        <h1 className="text-3xl font-bold text-black">Performance Dashboard</h1>
        <p className="text-base mt-2">
          Real Time Updates on Initiatives by the Federal Government
        </p>
      </div>

      {/* serach bar sections */}
      <div className="w-[80vw] mx-10">
        <div className="mt-14 flex justify-between">
          <div className="border boder-gray-200 w-[420px] p-4 rounded-full flex gap-4 items-center">
          <CiSearch size={30} />
            <input type="text" placeholder="Search by initiative name" />
          </div>

          <div className="flex gap-4">
            <div className="border boder-gray-200 w-[200px] p-4  items-center rounded-full flex gap-3">
              {/* <input type="text" placeholder="Select Ministery" className="w-[120px]" /> */}
              <p>Select Ministery</p>
              <IoIosArrowDown size={30} className="cursor-pointer text-center" />
            </div>

            <div className="border boder-gray-200 w-[200px] p-4  items-center rounded-full flex gap-3">
              {/* <input type="text" placeholder="Select Ministery" className="w-[120px]" /> */}
              <p>Sort by A-Z</p>
              <IoIosArrowDown size={30} className="cursor-pointer text-center" />
            </div>

           
          </div>
        </div>

        {/* images container */}
        <div className="grid grid-cols-3 gap-6 mt-10 ">
          {performaceDashboardData.map((item) => (
            <div className="border-2 border-gray-300 rounded-2xl p-6 justify-between ">
              <div className="flex flex-col justify-center text-center items-center w-[350px] h-[200px]">
              <img src={item.image} alt={item.name} className="w-[200px] h-[110px] object-contain" />
              <h1 className="text-3xl font-bold mt-2">{item.price}</h1>
              <p>{item.text}</p>
              </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
