
import NigeriaLogo from "../assets/fed-img.jpg";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";

const Maximize = () => {
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
            <Link to="/delivering-support">Back</Link>
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
            Maximizing Reach, Minimizing Gaps
          </p>

          <p className="tracking-wide mt-4">
             We're identifying and support as many students as possible. With every 
             step, we strive to maximize the daa we collect, reducing the shortfall and ensuring that no deservinf students is overlooked.
          </p>

          <div>
            
          </div>
          <div className="bg-green-500 text-white flex w-[230px] gap-4 items-center justify-center px-2 py-4 mt-14 text-center rounded-full">
            <button>Share Information</button>
            <CiShare2 size={30} />
            
          </div>
        </div>
      </div>

      {/* chart section  */}
      <div>
      <Link to="/feature-promise">
        <p className="text-end mr-[-600px]">Next</p>
        </Link>
      </div>
      <div className="w-[500px] mt-[250px]">
      
      
      <div className='flex gap-4 items-center'>
      <div className='w-[500px] h-[90px] bg-[#a4fcec] rounded-3xl'>
        
      </div>  
      <h1 className='text-4xl text-center '>90%</h1>
      </div>
      <p className=''>Total Data Mined: <span className='font-bold text-2xl mt-6'>90,000</span> </p>

      <div className='flex gap-4 items-center mt-[15px]'>
      <div className='w-[50px] h-[90px] bg-[#faa5a5] rounded-2xl'>
        
      </div>  
      <h1 className='text-4xl text-center '>10%</h1>
      </div>
      <p className=''>Shortfall of Data to be Mined: <span className='font-bold text-2xl mt-6'>10,000</span> </p>
      </div>
    </div>
  </div>
  )
}

export default Maximize
