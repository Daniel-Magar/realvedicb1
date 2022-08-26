import React from "react";
import Aright from "../images/Aright.png";
import ArightSm from "../images/ArightSm.png";

const ShopByCategory = () => {
  return (
    <>
      <section>
        <div className="py-10">
          <div className="flex justify-between items-center py-5 mx-[2rem]  md:mx-[6rem] ">
            <div>
              <h1 className="text-[20px] md:text-[26px]  font-semibold">
                Shop By Category
              </h1>
            </div>
            <div>
              <h1 className="text-[20px] md:text-[26px]  font-normal md:font-semibold">
                View All
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="md:border border-red-600">
        <div className="grid  grid-flow-row gap-4 md:grid md:grid-cols-5 md:mx-[6rem] my-5">
          <div className="bg-[#D9D9D9] py-8 px-8 md:border md:rounded-[20px]">
            <div className="flex flex-col">
              <h1 className="text-[20px] md:text-[26px]  font-semibold">
                Spice Blend
              </h1>
              <span className="md:hidden">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] py-8 px-8  md:border md:rounded-[20px]">
            <div className="flex flex-col">
              <h1 className="text-[20px] md:text-[26px]  font-semibold">
                Flour Packs
              </h1>
              <span className="md:hidden">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] py-8 px-8  md:border md:rounded-[20px]">
            <div className="flex flex-col">
              <h1 className="text-[20px] md:text-[26px]   font-semibold">
                Dosa Mix
              </h1>
              <span className="md:hidden">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] py-8 px-8  md:border md:rounded-[20px]">
            <div className="flex flex-col">
              <h1 className="text-[20px] md:text-[26px]  font-semibold">
                Spice Blends
              </h1>
              <span className="md:hidden">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] py-8 px-8  md:border md:rounded-[20px]">
            <div className="flex flex-col">
              <h1 className="text-[20px] md:text-[26px]  font-semibold">
                Flour Packs
              </h1>
              <span className="md:hidden">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] py-8 px-8  md:border md:rounded-[20px]">
            <div className="flex flex-col">
              <h1 className="text-[20px] md:text-[26px]  font-semibold">
                Flour Packs
              </h1>
              <span className="md:hidden">View All</span>
            </div>
          </div>
          <div className="bg-[#F3F3F3]  py-8 px-8  md:bg-[#D9D9D9] md:border md:rounded-[20px]">
            <div className="flex flex-col">
              <div className="flex justify-between items-center gap-5">
                <h1 className="text-[20px] md:text-[26px]  font-semibold">
                  Shop All
                </h1>
                <div className="hidden md:flex">
                  <img src={Aright} alt="arrow-right" />
                </div>
                <div className="flex items-center  md:hidden mt-5">
                  <img src={ArightSm} alt="arrow-right" />
                </div>
              </div>

              <span className="md:hidden">View All</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
