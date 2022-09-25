import React from "react";
import mountain from "../assets/mountain-1.png";
const Silence1 = () => {
  return (
    <div className="bg-primary mt-40 flex flex-col lg:flex-row lg:pb-20">
      <div className="text-center flex flex-col justify-center items-center lg:flex-1">
        <h2 className="text-[2rem] lg:text-[3rem]">Are you miss</h2>
        <h1 className="text-[100px] lg:text-[150px] font-black tracking-wide ">
          silence
        </h1>
      </div>
      <div className="p pb-0 flex items-center justify-center lg:flex-1">
        <img
          className="object-contain w-[500px] drop-shadow-2xl "
          src={mountain}
        />
      </div>
    </div>
  );
};

export default Silence1;
