import React from "react";
import Menu1 from "../images/Menu1.png";
import Menu2 from "../images/Menu2.png";
import Menu3 from "../images/Menu3.png";
import Menu4 from "../images/Menu4.png";
import Menu5 from "../images/Menu5.png";
import Mdown from "../images/Mdown.png";

const Menu = () => {
  return (
    <section className="my-5">
      <div className="hidden md:grid md:grid-flow-row md:grid-cols-7 md:place-items-center md:items-center md:justify-center md:w-full md:bg-[#D9D9D9] border md:p-10">
        <div className="border"></div>
        <div className="flex flex-col justify-center items-center border text-center">
          <img src={Menu1} alt="menu1" className="w-[40px] h-[40px]" />
          <h1 className="text-[20px] font-semibold md:text-[26px]">Blogs</h1>
        </div>
        <div className="flex flex-col justify-center items-center border text-center">
          <img src={Menu2} alt="menu2" className="w-[40px] h-[40px] " />
          <div className="text-[20px] md:text-[26px] font-semibold flex justify-center items-center gap-2">
            <h1>Moms & Baby</h1>
            <div>
              <img src={Mdown} alt="menu-down" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border text-center">
          <img src={Menu3} alt="menu3" className="w-[40px] h-[40px]" />
          <h1 className="text-[20px] md:text-[26px]  font-semibold">
            Products
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center border text-center">
          <img src={Menu4} alt="menu4" className="w-[40px] h-[40px]" />
          <h1 className="text-[20px] md:text-[26px]  font-semibold">Pharma</h1>
        </div>
        <div className="flex flex-col justify-center items-center border text-center">
          <img src={Menu5} alt="menu5" className="w-[40px] h-[40px]" />
          <h1 className="text-[20px] md:text-[26px]  font-semibold">Doctors</h1>
        </div>
        <div className="border"></div>
      </div>
    </section>
  );
};

export default Menu;
