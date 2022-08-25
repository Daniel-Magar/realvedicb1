import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full p-5 left-0 top-0 bg-[#D9D9D9] md:bg-[#ffff]">
        <div className=" w-full ">
          <div className="flex justify-between items-center ">
            <div className=" flex-1 md:hidden"></div>
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-[40px] h-[40px]  ml-[4px]"
              />

              <h1 className="text-[16px] text-[#000000] font-bold tracking-[3px]">
                REAL
              </h1>
              <h1 className="text-[16px] text-[#000000] leading-3 font-bold ">
                VEDIC
              </h1>
            </div>
            <div className="md:hidden flex-1 flex justify-end pt-4">
              <div className="">
                <div className="flex gap-1 items-center">
                  <div className="bg-[#000000] border border-black h-[4px] w-[4px] rounded-[50%]  my-[3px]"></div>
                  <div className="bg-[#000000] border border-black h-[4px] w-[28px] rounded-[32px] my-[3px]"></div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="bg-[#000000] border border-black h-[4px] w-[4px] rounded-[50%] my-[3px]"></div>
                  <div className="bg-[#000000] border border-black h-[4px] w-[16px] rounded-[32px] my-[3px]"></div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="bg-[#000000] border border-black h-[4px] w-[4px] rounded-[50%]  my-[3px]"></div>
                  <div className="bg-[#000000] border border-black h-[4px] w-[28px] rounded-[30px] my-[3px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
