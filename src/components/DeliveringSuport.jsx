import React from 'react';
import NigeriaLogo from "../assets/fed-img.jpg";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";

const DeliveringSuport = () => {
  return (
    <div className="flex gap-10 py-8 px-24 bg-gray-50">
    {/* Logo and dots part */}
    <div className="w-[100px] flex justify-center bg-white border border-gray-500 h-screen rounded-3xl p-4">
      <div className="flex flex-col ">
        <img
          src={NigeriaLogo}
          alt=""
          className="w-[60px] h-[60px] rounded-full"
        />

        <div className="mt-24 flex gap-8 flex-col items-center">
          
          <div className="w-2 h-2 bg-green-300 rounded-full"></div>
          <div className="w-2 h-2 bg-green-300 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-300 rounded-full"></div>
        </div>
      </div>
    </div>

    <div className="flex justify-between w-[80vw]">
      {/* text section  */}
      <div>
        <div>
          {/* <div> */}

          {/* </div> */}
          <div className="flex gap-4 items-center">
            <Link to="/bridge-gap">Back</Link>
            <p>|</p>
            <CiHome size={30} />
            <MdOutlineKeyboardArrowRight />
            <p>nelfund</p>
            <MdOutlineKeyboardArrowRight />
            <p className="font-bold text-green-500">Osun State</p>
          </div>
        </div>
        <div className="w-[450px] mt-12 ">
          <p className="text-3xl font-bold capitalize tracking-tight">
            Delivering gsupport when it is needed
          </p>

          <p className="tracking-wide mt-4">
            Timely funding is crucail. Our fast and reliable disbursement precess ensures students recieve the support they need, exactly 
            when they need it, whether for textbooks, accomodation, or staying enrolled.
          </p>

          <div className="bg-green-500 text-white w-[230px] flex gap-4 items-center justify-center px-2 py-4 mt-14 text-center rounded-full">
            <button>Share Information</button>
            <CiShare2 size={30} />
            
          </div>
        </div>
      </div>

      {/* chart section  */}
      <div className="w-[500px] relative">

      <Link to="/maximize-reach">
        <p className="text-end m-4">Next</p>
        </Link>

        <div className="bg-[#a4fcec] p-4  rounded-full h-[300px] w-[300px] flex flex-col items-center justify-center">
          <p className="text-2xl">
            
            <span className="font-bold text-2xl">40,000</span>{" "}
          </p>
          <h1 className="font-bold text-2 text-right">40%</h1>
          <p>Total Beneficiaries Paid</p>
        </div>
        <div className="bg-[#faa5a5] p-4 absolute top-36 right-2  rounded-full h-[200px] w-[200px] flex flex-col items-center justify-center">
          <p className="text-2xl">
            
            <span className="font-bold text-2xl">25,000</span>{" "}
          </p>
          <h1 className="font-bold text-2 text-right">25%</h1>
          <p className='text-sm'>Awaiting Account Creation</p>
        </div>
        <div className="bg-[#f7f3d0] p-4 absolute right-40 rounded-full h-[200px] w-[200px] flex flex-col items-center justify-center">
          <p className="text-2xl">
            
            <span className="font-bold text-2xl">35,000</span>{" "}
          </p>
          <h1 className="font-bold text-2 text-right">35%</h1>
          <p className='text-sm'>Awaiting BVN Validation</p>
        </div>

        
      </div>
    </div>
  </div>
  )
}

export default DeliveringSuport
