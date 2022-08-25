import React from "react";
import search from "../images/Search.png";

const Rectangle = () => {
  return (
    <section>
      <div className="w-[90%] border border-purple-500 ml-5 mr-5 mt-2 p-3">
        <div className="md:hidden flex items-center justify-between border w-full m-auto p-1">
          <input type="text" className="w-full p-2 outline-none border-none" />
          <img src={search} alt="search" className="min-w-[14px]" />
        </div>
      </div>
    </section>
  );
};

export default Rectangle;
