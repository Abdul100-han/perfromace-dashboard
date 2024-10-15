
import NigeriaLogo from "../assets/fed-img.jpg";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";

const BridgeGap = () => {
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
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
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
              <Link to="/">Back</Link>
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
              Bridging the ducation gap by opening doors to education accross
              the nation
            </p>

            <p className="tracking-wide mt-4">
              Education should never be a privilage for the few, but a right for
              all. We have touch the lives of countless students, extending
              financial support to every corner of our country. Exlpore the
              breadth of our coverage, and see how we are closing the
              educational gap, ensuring that no dream is left unrealized.
            </p>

            <div className="bg-green-500 text-white flex gap-4 w-[230px] items-center justify-center px-4 py-2 mt-14 text-center rounded-full">
              <button>Share Information</button>
              <CiShare2 size={30} />
              
            </div>
          </div>
        </div>

        {/* chart section  */}
        <div className="w-[500px]">

        <Link to="/delivering-support">
        <p className="text-end m-4">Next</p>
        </Link>
          <div className="bg-[#a4fcec] p-4  rounded-t-2xl h-[300px] flex flex-col justify-between">
            <p className="text-2xl">
              Total Beneficiaries Paid:{" "}
              <span className="font-bold text-2xl">70,000</span>{" "}
            </p>
            <h1 className="font-bold text-5xl text-right">70%</h1>
          </div>

          <div className="bg-[#faa5a5] p-4 h-[140px] flex flex-col justify-between">
            <p>
              Awating BVN Validation:{" "}
              <span className="font-bold text-2xl">20,000</span>{" "}
            </p>
            <h1 className="font-bold text-3xl text-right">70%</h1>
          </div>

          <div className="bg-[#f7f3d0] rounded-b-2xl p-4 h-[100px] flex flex-col justify-between">
            <p>
              Short fall of Ben. to meet Target:{" "}
              <span className="font-bold text-2xl">10,000</span>{" "}
            </p>
            <h1 className="font-bold text-2xl text-right">70%</h1>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default BridgeGap;
