
import NigeriaLogo from "../assets/fed-img.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";



const Footer = () => {
  return (
    <>
    <div className="w-[80vw] m-auto mb-20 flex h-[80px] justify-between items-center px-6 border border-gray-200 rounded-2xl">
      <div className="flex justify-between items-center">
        {/* <div> */}
          <img src={NigeriaLogo} alt="logo" className="w-[50px] h-[50px]" />
        </div>
        <div className="flex gap-4">
          <FaFacebookSquare size={30} className="cursor-pointer" />
          <FaXTwitter size={30}  className="cursor-pointer" />
          <IoLogoInstagram size={30}  className="cursor-pointer" />
        </div>
      {/* </div> */}
      
    </div>

    </>
  );
};

export default Footer;
