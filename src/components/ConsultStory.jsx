import React from "react";
import polyshape from "../images/polyshape.png";
import polyshape2 from "../images/polyshape2.png";
import polyshape3 from "../images/polyshape3.png";

const ConsultStory = () => {
  return (
    <>
      <section className="my-10 md:my-2 lg:my-5 ">
        <div className=" mx-[2rem] md:mx-[6rem] lg:mx-[6rem] flex flex-wrap  justify-center items-center">
          <div className="relative">
            <img
              src={polyshape}
              alt="polyshape"
              className="w-[30rem] lg:w-[50rem]  md:w-[25rem]"
            />
          </div>

          <div className="absolute w-[50%] mx-[1rem] md:mx-[14rem] lg:mx-[20rem] md:w-[30%] lg:w-[20%] ">
            <div className="my-1 lg:my-5">
              <p className="text-[20px] font-semibold text-center lg:text-[28px] w-[88%] flex flex-wrap justify-center items-center">
                Consult our Vaidya
              </p>
            </div>
            <p className="text-[12px] text-center lg:text-[16px]">
              Consult our team of experienced Doctors & Practitioners, to know
              more about your body and get the right guidance, to attain the
              path of holistic living.
            </p>
          </div>
        </div>
      </section>
      <section className="my-2 md:my-2 lg:my-5">
        <div className=" mx-[2rem] md:mx-[6rem] lg:mx-[6rem] flex flex-wrap  justify-center items-center ">
          <div className="relative">
            <img
              src={polyshape3}
              alt="polyshape"
              className="w-[50rem] lg:w-[50rem] md:w-[25rem]"
            />
          </div>

          <div className="absolute w-[60%] mx-[1rem] md:mx-[14rem] lg:mx-[20rem] md:w-[30%] lg:w-[30%] ">
            <div className="my-1 lg:my-5">
              <p className="text-[20px] font-semibold text-center lg:text-[28px] w-[88%] flex flex-wrap justify-center items-center">
                Story
              </p>
            </div>
            <p className="text-[12px] text-center lg:text-[16px] mb-10 mr-4">
              Realvedic is a startup in the Holistic health and wellness space
              where we aim to bring positive changes in the modern lifestyle of
              the people with products and services curated based on traditional
              Indian methods.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsultStory;
