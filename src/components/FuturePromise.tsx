import React from 'react'
import NigeriaLogo from "../assets/fed-img.jpg";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";

const FuturePromise = () => {
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
            <Link to="/maximize-reach">Back</Link>
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
            A Promise to Our Feature
          </p>

          <p className="tracking-wide mt-4">
             Since we starte, we've reached thousand of students accross the country. Each 
             payment of hope restored, stress lifted, and dreams put back on track.
          </p>

          <div className="bg-green-500 text-white w-[230px] flex gap-4 items-center justify-center px-2 py-4 mt-14 text-center rounded-full">
            <button>Share Information</button>
            <CiShare2 size={30} />
            
          </div>
        </div>
      </div>

      {/* chart section  */}
      <div className="w-[] relative flex gap-2 items-baseline mt-[300px]">
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[50px] bg-green-300 rounded-2xl'></div>
            <p>Jan.</p>
        </div>

        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[200px] bg-green-300 rounded-2xl'></div>
            <p>Feb.</p>
        </div>

        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[160px] bg-green-300 rounded-2xl'></div>
            <p>Mar.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[100px] bg-green-300 rounded-2xl'></div>
            <p>Apr.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[400px] bg-green-300 rounded-2xl'></div>
            <p>May.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[100px] bg-green-300 rounded-2xl'></div>
            <p>Jun.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[300px] bg-green-300 rounded-2xl'></div>
            <p>Jul.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[100px] bg-green-300 rounded-2xl'></div>
            <p>Aug.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[100px] bg-green-300 rounded-2xl'></div>
            <p>Sep.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[160px] bg-green-300 rounded-2xl'></div>
            <p>Oct.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[300px] bg-green-300 rounded-2xl'></div>
            <p>Nov.</p>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-[50px] h-[200px] bg-green-300 rounded-2xl'></div>
            <p>Dec.</p>
        </div>

        
      </div>
    </div>
  </div>
  )
}

export default FuturePromise
