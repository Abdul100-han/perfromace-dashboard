
import NigeriaLogo from "../assets/fed-img.jpg";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className="px-40 py-4 flex justify-between items-center">
      <div className="flex gap-2">
        <div>
          <img src={NigeriaLogo} alt="Logo" className="w-[60px] h-[60px]" />
        </div>
        <div className="">
          <p className="text-green-600 text-sm font-bold uppercase tracking-tighter">
            Federal Ministery of Finace <br /> budget and national planning
          </p>
          <p className="text-red-600 text-[12px] caption-bottom font-bold">
            (Budjet and national planning Aim)
          </p>
        </div>
      </div>

      {/* right side links  */}
      <div className="flex  gap-6">
        <Link to="/initiative" className="text-black">
          Initiatives
        </Link>
        
        <Link to="/news-and-event" className="text-black">
          News & Events
        </Link>
        <Link to="/contact" className="text-black">
          Contact
        </Link>
        <Link to="/more" className="text-black">
          More
        </Link>
        <Link to="/" className="text-black">
        <CiSearch size={30} />
        </Link>

        <Link to="/bridge-gap">
        Next
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
