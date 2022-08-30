import React from "react";
import demoimg from "../images/demoimg.png";
import demoimgsvg from "../images/demoimg.png";
import ArightSm from "../images/ArightSm.png";

const BestSeller = () => {
  return (
    <>
      <section>
        <div className="py-1">
          <div className="flex justify-between items-center py-5 mx-[2rem]  md:mx-[6rem] ">
            <div>
              <h1 className="text-[18px] md:text-[18px] lg:text-[20px]  font-semibold">
                Best Seller
              </h1>
            </div>
            <div className="md:hidden lg:hidden">
              <h1 className="text-[14px] md:text-[18px] lg:text-[20px] font-normal md:font-semibold">
                View All
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className=" my-2">
        <div className=" my-1 md:mx-[6rem] ">
          <div className=" my-1">
            <div className="mx-8 md:mx-0 py-5">
              <div className="grid grid-flow-row grid-cols-2 md:grid md:grid-flow-row md:grid-cols-3 flex-wrap gap-2 items-center justify-between text-center my-2">
                <div className="">
                  <div className="text-[12px] text-center bg-[#D9D9D9] p-5  flex-1 ">
                    <div className="max-w-full min-w-[100%] min-h-[auto]  md:min-h-[auto] py-10 md:p-[7rem] lg:p-[10rem] flex justify-center items-center">
                      <img src={demoimg} alt="demo" className="border" />
                    </div>
                  </div>
                  <div className="flex justify-between text-left my-2">
                    <div>
                      <h1 className="text-[12px] font-semibold leading-3 lg:text-[18px]">
                        Garlic Rasam Powder | Instant Mix
                      </h1>
                    </div>
                    <div className="bg-[#D9D9D9] flex text-center items-center">
                      <h1 className="text-[10px] font-semibold p-1 lg:text-[18px]">
                        250gm
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between text-left my-2">
                    <div></div>
                    <div>
                      <h1 className="text-[10px] lg:text-[20px]">Rs. 110.00</h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-center my-2">
                    <div className=""></div>
                    <div className="bg-[#D9D9D9] p-1 w-[8rem] lg:w-[10rem]">
                      <h1 className="text-[10px] font-semibold lg:text-[18px]">
                        ADD TO CART
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="text-[12px] text-center bg-[#D9D9D9] p-5 flex-1 ">
                    <div className="max-w-full min-w-[100%] min-h-[auto] py-10 md:p-[7rem] lg:p-[10rem] flex justify-center items-center">
                      <img src={demoimg} alt="demo" className="border" />
                    </div>
                  </div>
                  <div className="flex justify-between text-left my-2">
                    <div>
                      <h1 className="text-[12px] font-semibold leading-3 lg:text-[18px]">
                        Garlic Rasam Powder | Instant Mix
                      </h1>
                    </div>
                    <div className="bg-[#D9D9D9] flex text-center items-center">
                      <h1 className="text-[10px] font-semibold p-1 lg:text-[18px]">
                        250gm
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between text-left my-2">
                    <div></div>
                    <div>
                      <h1 className="text-[10px] lg:text-[20px]">Rs. 110.00</h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-center my-2">
                    <div className=""></div>
                    <div className="bg-[#D9D9D9] p-1 w-[8rem] lg:w-[10rem]">
                      <h1 className="text-[10px] font-semibold lg:text-[18px]">
                        ADD TO CART
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="text-[12px] text-center bg-[#D9D9D9] p-5 flex-1 ">
                    <div className="max-w-full min-w-[100%] min-h-[auto] py-10 md:p-[7rem] lg:p-[10rem] flex justify-center items-center">
                      <img src={demoimg} alt="demo" className="border" />
                    </div>
                  </div>
                  <div className="flex justify-between text-left my-2">
                    <div>
                      <h1 className="text-[12px] font-semibold leading-3 lg:text-[18px]">
                        Garlic Rasam Powder | Instant Mix
                      </h1>
                    </div>
                    <div className="bg-[#D9D9D9] flex text-center items-center">
                      <h1 className="text-[10px] font-semibold p-1 lg:text-[18px]">
                        250gm
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between text-left my-2">
                    <div></div>
                    <div>
                      <h1 className="text-[10px] lg:text-[20px]">Rs. 110.00</h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-center my-2">
                    <div className=""></div>
                    <div className="bg-[#D9D9D9] p-1 w-[8rem] lg:w-[10rem]">
                      <h1 className="text-[10px] font-semibold lg:text-[18px]">
                        ADD TO CART
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="lg:hidden">
                  <div className="text-[12px] text-center bg-[#D9D9D9] p-5 flex-1 ">
                    <div className="max-w-full min-w-[100%] min-h-[auto] py-10 md:p-[7rem] lg:p-[10rem] flex justify-center items-center">
                      <img src={demoimg} alt="demo" className="border" />
                    </div>
                  </div>
                  <div className="flex justify-between text-left my-2">
                    <div>
                      <h1 className="text-[12px] font-semibold leading-3 lg:text-[18px]">
                        Garlic Rasam Powder | Instant Mix
                      </h1>
                    </div>
                    <div className="bg-[#D9D9D9] flex text-center items-center">
                      <h1 className="text-[10px] font-semibold p-1 lg:text-[18px]">
                        250gm
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between text-left my-2">
                    <div></div>
                    <div>
                      <h1 className="text-[10px] lg:text-[18px]">Rs. 110.00</h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-center my-2">
                    <div className=""></div>
                    <div className="bg-[#D9D9D9] p-1 w-[8rem] lg:w-[10rem]">
                      <h1 className="text-[10px] font-semibold lg:text-[18px]">
                        ADD TO CART
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
