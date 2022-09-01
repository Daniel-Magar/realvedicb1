import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const FollowUs = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <section className=" my-1">
        <div className="mx-8 my-2">
          <div className="my-2">
            <h1 className="text-[18px] md:text-[18px] lg:text-[20px]  font-semibold">
              Best Seller
            </h1>
          </div>
          <h1 className="text-center">@Realvedic</h1>
        </div>
      </section>
      <section className="">
        <div className="border border-purple-500 mx-8">
          <Carousel responsive={responsive}>
            <div className="flex gap-3">
              <div className="bg-[#D9D9D9] w-full h-[15rem] p-10 flex items-center justify-center text-center">
                Item1
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] w-full h-[15rem] p-10 flex items-center justify-center text-center">
                Item2
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] w-full h-[15rem] p-10 flex items-center justify-center text-center">
                Item3
              </div>
            </div>
            <div>
              <div className="bg-[#D9D9D9] w-full h-[15rem] p-10 flex items-center justify-center text-center">
                Item4
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default FollowUs;
