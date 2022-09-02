import React from "react";
import teamoval from "../images/teamoval.png";
import rectangle from "../images/rectangle.png";
import teamoval1 from "../images/teamoval1.png";
import teamoval2 from "../images/teamoval2.png";

const Testimony = () => {
  return (
    <section className=" my-14">
      <div className="mx-8 py-4 lg:mx-[6rem]">
        <h1 className="text-[18px] md:text-[18px] lg:text-[24px]  font-semibold ">
          Testimony
        </h1>
      </div>

      <div className=" mx-8 py-2 lg:mx-[6rem]">
        <div className=" grid grid-flow-row grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="my-2   w-full lg:w-full flex flex-col md:justify-center md:items-center lg:justify-center lg:items-center ">
            <div class="relative flex flex-col justify-center items-center md:justify-start md:items-start  lg:justify-start lg:items-start">
              <div className="flex md:justify-start md:items-start ">
                <img
                  src={teamoval}
                  alt="polyshape"
                  className="mx-2 md:w-[16rem] lg:w-[22rem]  "
                />
                <div class="absolute top-14 md:top-[2.5rem] lg:top-[3rem]">
                  <div class="w-8/12 md:w-8/12 lg:w-12/12 md:flex md:justify-start md:items-start left-0">
                    <img
                      src={rectangle}
                      alt="teamrounded"
                      className=" lg:w-[18rem] shadow rounded-full aspect-square max-w-full h-auto  border-none "
                    />
                  </div>
                </div>
              </div>

              <div className="w-full  my-6 lg:my-[4rem] lg:mx-5 lg:w-[60%] ">
                <div className="text-center flex justify-center items-center lg:items-start ">
                  <p className="text-[14px] lg:text-[14px] mx-6">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2   w-full lg:w-full flex flex-col md:justify-center md:items-center lg:justify-end lg:items-end">
            <div class="relative flex flex-col justify-center items-center">
              <div className="flex md:justify-start md:items-center">
                <img
                  src={teamoval}
                  alt="polyshape"
                  className="mx-2 md:w-[16rem] lg:w-[22rem]  "
                />
                <div class="absolute top-14 md:top-[2.5rem] lg:top-[3rem]">
                  <div class="w-8/12 md:w-8/12 lg:w-12/12 md:flex md:justify-start md:items-start left-0 ">
                    <img
                      src={rectangle}
                      alt="teamrounded"
                      className=" lg:w-[18rem] shadow rounded-full aspect-square max-w-full h-auto  border-none "
                    />
                  </div>
                </div>
              </div>

              <div className="w-full  my-6 lg:my-[4rem] lg:mx-5 lg:w-[60%] ">
                <div className="text-center flex justify-center items-center lg:items-start ">
                  <p className="text-[14px] lg:text-[14px] mx-6">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2   w-full lg:w-full flex flex-col md:justify-center md:items-center lg:justify-center lg:items-center ">
            <div class="relative flex flex-col  flex flex-col justify-center items-center">
              <div className="flex justify-start items-start  md:justify-start md:items-start ">
                <img
                  src={teamoval}
                  alt="polyshape"
                  className="mx-2 md:w-[16rem] lg:w-[22rem]  "
                />
                <div class="absolute top-14 md:top-[2.5rem] lg:top-[3rem]">
                  <div class="w-8/12 md:w-8/12 lg:w-12/12 md:flex md:justify-start md:items-start">
                    <img
                      src={rectangle}
                      alt="teamrounded"
                      className=" lg:w-[18rem] shadow rounded-full aspect-square max-w-full h-auto  border-none "
                    />
                  </div>
                </div>
              </div>

              <div className="w-full  my-6 lg:my-[4rem] lg:mx-5 lg:w-[60%] ">
                <div className="text-center flex justify-center items-center lg:items-start ">
                  <p className="text-[14px] lg:text-[14px] mx-6">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
