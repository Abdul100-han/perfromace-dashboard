import React from "react";
import presidentImg from '../assets/president.png';
import BreakingNews from "./BreakingNews";
import PerformanceDashboard from "./PerformanceDashboard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
    <Navbar />
    <div className=" h-[70vh] p-[100px] bg-cover  bg-no-repeat" style={{backgroundImage: `url(${presidentImg})`}}>
      <div>
        <h1 className="text-3xl font-bold text-white capitalize">
          Building the federal <br /> republic of nigeria
        </h1>

        <p className="font-bold text-white mt-6">August 20, 2024</p>

        <p className="font-bold text-white mt-6">
          Track th projects transforming our <br /> communities, one step at a
          time{" "}
        </p>
      </div>

      <div>
        <p className="font-extrabold text-white">
          {"<"} {">"}
        </p>
      </div>


        {/* horizontal datas */}
      <div className="flex gap-8">
        <div>
            <h1 className="text-yellow-300 font-extrabold text-3xl">3,324</h1>
            <p className="text-white font-bold">Registered Initiatives</p>
        </div>

        <div>
            <div></div>
        </div>

        <div>
            <h1  className="text-yellow-300 font-extrabold text-3xl">270,000,930</h1>
            <p className="text-white font-bold">Beneficiaries target</p>
        </div>

        <div>
            <div></div>
        </div>

        <div>
            <h1  className="text-yellow-300 font-extrabold text-3xl">36</h1>
            <p className="text-white font-bold">Allocated States</p>
        </div>
      </div>

    </div>
      <BreakingNews /> 
       <PerformanceDashboard />
    <Footer />
      </>
  );
};

export default Main;
