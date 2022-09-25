import React from "react";
import city from "../assets/city.png";
import city2 from "../assets/city2.png";

const City = () => {
  return (
    <div className="bg-secondary">
      <div className="text-center  flex flex-col lg:flex-row justify-center items-center lg:flex-1 py-10">
        <h1 className="font-glitch text-[40px] lg:mt-[-5rem] lg:text-[90px] font-black tracking-wide lg:py-20">
          something
        </h1>
        <h2 className="text-[2rem] lg:text-[3rem]">take it from us</h2>
      </div>
      <div className="relative lg:mb-10 flex silence-eater text-center justify-center">
        <h1 className="text-secondary text-center absolute font-glitch text-[60px] lg:text-[90px] font-black tracking-wide ">
          the Silence Eater
        </h1>
        <img className="w-[100%] h-[600px]" src={city} />
      </div>
      <div className="p-6 cars-text lg:px-[40%] border-solid border-t-4">
        <h1 className="text-start text-4xl">city</h1>
        <p className="text-xl">
          the sound of cities is terrible , you cant focus ın what you do.
          experience of reading book is terrible at most city centre.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative flex cars-image  lg:mt-10 flex-1 lg:p-20">
          <h1 className="text-secondary text-center absolute  text-[90px] lg:mt-[-5rem] lg:text-[90px] font-black tracking-wide ">
            cars
          </h1>
          <h3 className="text-secondary absolute right-0 bottom-0 text-3xl font-semibold">
            terrible
          </h3>
          <h3 className="text-secondary absolute right-0 bottom-10 text-3xl font-semibold">
            terrible
          </h3>
          <h3 className="text-secondary absolute right-0 bottom-20 text-3xl font-semibold">
            terrible
          </h3>
          <h3 className="text-secondary absolute right-0 bottom-[120px] text-3xl font-semibold">
            terrible
          </h3>
          <img className="" src={city2} />
        </div>
        <div className="m-5 p-2 lg:m-20 flex h-fit border-solid border-8 flex-1">
          <p className="font-black text-3xl flex">
            can you imagine how it really harmfull for human health can you
            imagine how it really harmfull for human health
          </p>
        </div>
      </div>
    </div>
  );
};

export default City;
