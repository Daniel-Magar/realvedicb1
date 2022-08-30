import React from "react";
import search from "../images/Search.png";

const Search = () => {
  return (
    <section>
      <div className="w-[100%]  px-7 mt-2 ">
        <div className="md:hidden flex items-center justify-between border-[3px] border-[#D9D9D9] border-solid w-full m-auto p-1">
          <input type="text" className="w-full p-1 outline-none border-none" />
          <img src={search} alt="search" className="min-w-[14px]" />
        </div>
      </div>
    </section>
  );
};

export default Search;
