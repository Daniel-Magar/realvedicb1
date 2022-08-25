import React from "react";
import search from "../images/Search.png";

const Rectangle = () => {
  return (
    <section>
      <div className="w-[90%] border border-purple-500 ml-5 mr-5 mt-2 p-3">
        <div className="md:hidden w-full m-auto border border-red-500">
          <input type="text" className="wi-full" />
          <img
            src={search}
            alt="search"
            className="absolute p-10 min-w-[14px]"
          />
        </div>
        <div class="relative">
          <input type="text" placeholder="Email" />
          <img
            src={search}
            alt="search"
            className="absolute left-10 top-8 p-[9px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Rectangle;
