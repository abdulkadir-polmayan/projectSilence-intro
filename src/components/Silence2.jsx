import React from "react";
import mountain2 from "../assets/mountain-2.png";
const Silence2 = () => {
  return (
    <div>
      <div className="bg-primary pt-20 flex flex-col lg:flex-row lg:pb-20">
        <div className="text-center flex flex-col justify-center items-center lg:flex-1">
          <h2 className="text-[2rem] lg:text-[3rem]">we wanna hear the</h2>
          <h1 className="text-[100px] lg:text-[150px] font-black tracking-wide ">
            silence
          </h1>
        </div>
        <div className="p pb-0 flex items-center justify-center lg:flex-1">
          <img
            className="object-contain w-[500px] drop-shadow-2xl "
            src={mountain2}
          />
        </div>
      </div>
      <div>
        <div className=" w-[400px] flex flex-1 px-20 pt-20   lg:mt-[-200px] bg-primary">
          <p className="text-xl">
            silence give oppurtunity to peace of mind. the listen yourself is
            maybe most satsfiyng and productiv thing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Silence2;
