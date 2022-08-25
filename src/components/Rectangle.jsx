import React from "react";
import search from "../images/Search.png";

const Rectangle = () => {
  return (
    <section>
      <div className="w-[90%] border border-purple-500 ml-5 mr-5 mt-2 p-3">
        <div className="md:hidden w-full m-auto  p-2">
          <input type="text" className="w-full p-3 border border-red-500" />
          <img
            src={search}
            alt="search"
            className="absolute p-10 min-w-[14px] top-[7rem] left-[13rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Rectangle;
