import React from "react";
import Aright from "../images/Aright.png";
import ArightSm from "../images/ArightSm.png";

const ShopByCategory = () => {
  return (
    <>
      <section>
        <div>
          <div className="flex justify-between items-center py-5 mx-[2rem]  md:mx-[6rem] ">
            <div>
              <h1 className="text-[18px] md:text-[18px]  font-semibold">
                Shop By Category
              </h1>
            </div>
            <div>
              <h1 className="text-[14px] md:text-[18px]  font-normal md:font-semibold">
                View All
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#ffffff]">
        <div className=" my-1 md:grid md:grid-flow-row md:grid-cols-3 md:mx-[6rem] lg:grid-cols-5">
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] ">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[18px]  font-semibold">
                Spice Blend
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>

          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px]  ">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[18px]  font-semibold">
                Flour Packs
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px]">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[18px]  font-semibold">
                Dosa Mix
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] ">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[18px]  font-semibold">
                Dosa Mix
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px]  ">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[18px]  font-semibold">
                Dosa Mix
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] ">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[18px]  font-semibold">
                Spice Blend
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] ">
            <div className="mx-8 md:mx-[6rem] py-5">
              <div className="md:flex md:flex-wrap md:items-center md:justify-between gap:2 lg:flex lg:flex-wrap lg:items-center lg:justify-between">
                <h1 className="text-[14px] md:text-[18px]  font-semibold">
                  Spice Blend
                </h1>
                <span className="md:hidden lg:hidden text-[12px]">
                  View All
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F3F3] my-1 md:border md:rounded-[20px] ">
            <div className="mx-8 md:mx-[6rem] py-5">
              <div className="flex flex-wrap items-center justify-between">
                <h1 className="text-[14px] md:text-[18px]  font-semibold">
                  Shop All
                </h1>
                <div className="md:hidden text-[12px]">
                  <img src={ArightSm} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className=" bg-[#ffffff]">
        <div className=" my-1 md:flex md:flex-wrap md:justify-between md:items-center ">
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] md:mx-[6rem] flex-3">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[26px]  font-semibold">
                Spice Blend
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>

          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] md:mx-[6rem] flex-3">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[26px]  font-semibold">
                Flour Packs
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] md:mx-[6rem] flex-3">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[26px]  font-semibold">
                Dosa Mix
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] md:mx-[6rem] flex-3">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[26px]  font-semibold">
                Dosa Mix
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] md:mx-[6rem] flex-3">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[26px]  font-semibold">
                Dosa Mix
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] md:mx-[6rem] flex-3">
            <div className="mx-8 md:mx-[6rem] py-5">
              <h1 className="text-[14px] md:text-[26px]  font-semibold">
                Spice Blend
              </h1>
              <span className="md:hidden text-[12px]">View All</span>
            </div>
          </div>
          <div className="bg-[#D9D9D9] my-1 md:border md:rounded-[20px] md:mx-[6rem] flex-3">
            <div className="mx-8 md:mx-[6rem] py-5">
              <div className="md:flex md:flex-wrap md:items-center md:justify-between gap:2 lg:flex lg:flex-wrap lg:items-center lg:justify-between">
                <h1 className="text-[14px] md:text-[26px]  font-semibold">
                  Spice Blend
                </h1>
                <span className="md:hidden lg:hidden text-[12px]">
                  View All
                </span>
                <div className="hidden md:flex lg:flex">
                  <img src={ArightSm} alt="arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ShopByCategory;
