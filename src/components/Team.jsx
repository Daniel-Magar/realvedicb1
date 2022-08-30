import React from "react";
import teamoval from "../images/teamoval.png";
import rectangle from "../images/rectangle.png";

const Team = () => {
  return (
    <section className="border border-red-500 my-14">
      <div className="mx-8 py-4">
        <h1 className="text-[18px] md:text-[18px] lg:text-[20px]  font-semibold ">
          Our Team
        </h1>
      </div>
      {/* <div className="mx-8 border border-black py-4">
        <div className="grid grid-cols-2 items-center justify-center text-center">
          <div className="border border-green-600">
            <div className="relative ml-4">
              <img src={teamoval} alt="teamoval" />
            </div>
            <div className="absolute border border-purple-500 ">
              <div class="flex flex-wrap">
                <div class="w-6/12 sm:w-4/12 px-4">
                  <img
                    src={rectangle}
                    alt="teamrounded"
                    className=" shadow rounded-full aspect-square max-w-full h-auto  border-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border">2</div>
          <div className="border">3</div>
          <div className="border">4</div>
        </div>
      </div> */}
      <div className="border border-black mx-8 py-4">
        <div className="grid grid-cols-2 gap-8 p-4 border border-green-600">
          <div className=" flex flex-wrap  justify-center items-center ">
            <div className="relative">
              <img src={teamoval} alt="polyshape" className="" />
            </div>

            <div className="absolute border border-green-600">
              <div class="flex flex-wrap">
                <div class="w-6/12 sm:w-4/12 px-2 ">
                  <img
                    src={rectangle}
                    alt="teamrounded"
                    className=" shadow rounded-full aspect-square max-w-full h-auto  border-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap  justify-center items-center ">
            <div className="relative">
              <img src={teamoval} alt="polyshape" className="" />
            </div>

            <div className="absolute">
              <div class="flex flex-wrap">
                <div class="w-6/12 sm:w-4/12 px-2">
                  <img
                    src={rectangle}
                    alt="teamrounded"
                    className=" shadow rounded-full aspect-square max-w-full h-auto  border-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
