import React from "react";
import logo from "../images/logo.png";
import User from "../images/User.png";
import Search from "../images/Search.png";
import Cart from "../images/Cart.png";
import LogoFull from "../images/LogoFull.png";

const Navbar = () => {
  return (
    <nav>
      <div
        className="w-full p-5 left-0 top-0 bg-[#D9D9D9] 
       md:bg-[#ffff] md:w-[100%] md:px-[6rem]"
      >
        <div className=" w-full ">
          <div className="flex justify-between items-center ">
            <div className=" flex-1 md:hidden"></div>
            <div>
              <img
                src={LogoFull}
                alt="logo-full"
                className="w-[180px] h-[120px]"
              />
              {/* <h1 className="text-[16px] text-[#000000] font-bold tracking-[3px]">
                REAL
              </h1>
              <h1 className="text-[16px] text-[#000000] leading-3 font-bold ">
                VEDIC
              </h1> */}
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
            <div className="hidden flex-1 md:flex justify-end pt-4">
              <div className="md:flex items-center justify-center gap-5">
                <div>
                  <img src={User} alt="" />
                </div>
                <div>
                  <img src={Search} alt="" />
                </div>
                <div>
                  <img src={Cart} alt="" />
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
