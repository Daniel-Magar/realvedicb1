import React from "react";

const BestSeller = () => {
  return (
    <section className="w-full border border-purple-500 bg-[#F3F3F3] p-6 md:p-[6rem]">
      <div className="w-full border border-red-500">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-[20px] font-semibold md:text-[26px]">
            Best Seller
          </h1>
          <h1 className="md: hidden">View All</h1>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-2 justify-center items-center text-center md:grid md:grid-cols-3 md:mx-[6rem] my-5">
          <div className="grid  items-center content-center gap-1">
            <div className="bg-[#D9D9D9] h-[100px] w-full  border border-red-500">
              !
            </div>
            <div className="border border-red-500">$%^</div>
            <div className="border border-red-500">#</div>
            <div className="border border-red-500">$</div>
          </div>

          <div className="grid  items-center gap-1">
            <div className="bg-[#D9D9D9] h-[100px] w-full  border border-red-500">
              !
            </div>
            <div className="border border-red-500">@</div>
            <div className="border border-red-500">#</div>
            <div className="border border-red-500">$</div>
          </div>
          <div className="grid  items-center gap-1">
            <div className="bg-[#D9D9D9] h-[100px] w-full  border border-red-500">
              !
            </div>
            <div className="border border-red-500">@</div>
            <div className="border border-red-500">#</div>
            <div className="border border-red-500">$</div>
          </div>
          <div className="bg-[#D9D9D9]">1</div>
          <div className="bg-[#D9D9D9]">1</div>
          <div className="bg-[#D9D9D9]">1</div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
