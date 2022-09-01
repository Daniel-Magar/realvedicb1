import React from "react";
import teamoval from "../images/teamoval.png";
import rectangle from "../images/rectangle.png";
import teamoval1 from "../images/teamoval1.png";
import teamoval2 from "../images/teamoval2.png";

const Team = () => {
  return (
    <>
      <section className=" my-14">
        <div className="mx-8 py-4 lg:mx-[6rem]">
          <h1 className="text-[18px] md:text-[18px] lg:text-[24px]  font-semibold ">
            Our Team
          </h1>
        </div>

        <div className=" mx-8 py-2 lg:mx-[6rem] ">
          <div className="grid grid-flow-row grid-cols-2 gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
            <div className="my-2  ">
              <div class="relative ">
                <img
                  src={teamoval}
                  alt="polyshape"
                  className="mx-2 md:w-[12rem] lg:w-[22rem]"
                />
                <div class="absolute top-2 md:top-4 lg:top-[3rem]">
                  <div class="w-8/12 md:w-8/12 lg:w-12/12">
                    <img
                      src={rectangle}
                      alt="teamrounded"
                      className=" lg:w-[18rem] shadow rounded-full aspect-square max-w-full h-auto  border-none "
                    />
                  </div>
                </div>
                <div className="my-6 lg:my-[4rem] flex flex-wrap justify-center items-cente">
                  <div className="text-center lg:w-[80%]">
                    <h1 className="text-[14px] lg:text-[16px] font-semibold my-2">
                      Ranganathan Srinivasan Founder & CEO
                    </h1>
                    <p className="text-[12px] lg:text-[14px]">
                      Technocrat entrepreneur with over 20+ years experience. He
                      is the founder and CEO of EKO Infomatics Solutions. Head
                      of Decision Science Team at GE and VP Research and
                      Analytics at WNS. He dons many hats and loves the
                      challenges of a startup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2  ">
              <div class="relative">
                <img
                  src={teamoval1}
                  alt="polyshape"
                  className="mx-2 md:w-[12rem] lg:w-[22.5rem]"
                />
                <div class="absolute top-2 md:top-4 lg:top-[3rem]">
                  <div class="w-8/12 md:w-8/12 lg:w-12/12 ">
                    <img
                      src={rectangle}
                      alt="teamrounded"
                      className=" lg:w-[18rem] shadow rounded-full aspect-square max-w-full h-auto  border-none "
                    />
                  </div>
                </div>
                <div className="my-6 lg:my-[4rem] flex flex-wrap justify-center items-center">
                  <div className="text-center lg:w-[80%]">
                    <h1 className="text-[14px] lg:text-[16px] font-semibold my-2">
                      Rangarajan Venkataraman Co-Founder & COO Entrepreneur
                    </h1>
                    <p className="text-[12px] lg:text-[14px]">
                      with over 10 years of experience in the hospitality
                      industry. His foray began in 2010 when he entered his
                      family's F&B outfit. He has built and managed operations
                      for several businesses in the F&B sector. He specializes
                      in manufacturing, operations and process development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2  ">
              <div class="relative">
                <img
                  src={teamoval2}
                  alt="polyshape"
                  className="mx-2 md:w-[12rem] lg:w-[22rem] "
                />
                <div class="absolute top-2 md:top-4 lg:top-[3rem]">
                  <div class="w-8/12 md:w-8/12 lg:w-12/12">
                    <img
                      src={rectangle}
                      alt="teamrounded"
                      className=" lg:w-[18rem] shadow rounded-full aspect-square max-w-full h-auto  border-none "
                    />
                  </div>
                </div>
                <div className="my-6 lg:my-[4rem] flex flex-wrap justify-center items-cente">
                  <div className="text-center lg:w-[80%]">
                    <h1 className="text-[14px] lg:text-[16px] font-semibold my-2">
                      Rajlaxmi Shivram Head of Product Development
                    </h1>
                    <p className="text-[12px] lg:text-[14px]">
                      Ex-Portfolio head in the Ecommerce vertical in HDFC Bank
                      and has an overall experience of around 20 years. She
                      loves dabbling in new ideas. Being a mother of a toddler,
                      she has been trying hard to get her hands on healthy
                      options in the market and aims to bridge that gap through
                      Realvedic products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2">
              <div class="relative">
                <img
                  src={teamoval}
                  alt="polyshape"
                  className="mx-2 md:w-[12rem] lg:w-[22rem] "
                />
                <div class="absolute top-2 md:top-4 lg:top-[3rem]">
                  <div class="w-8/12 md:w-8/12 lg:w-12/12">
                    <img
                      src={rectangle}
                      alt="teamrounded"
                      className=" lg:w-[18rem] shadow rounded-full aspect-square max-w-full h-auto  border-none "
                    />
                  </div>
                </div>
                <div className="my-6 lg:my-[4rem] flex flex-wrap justify-center items-center">
                  <div className="text-center lg:w-[80%]">
                    <h1 className="text-[14px] lg:text-[16px] font-semibold my-2">
                      Rangarajan Venkataraman Co-Founder & COO Entrepreneur
                    </h1>
                    <p className="text-[12px] lg:text-[14px]">
                      with over 10 years of experience in the hospitality
                      industry. His foray began in 2010 when he entered his
                      family's F&B outfit. He has built and managed operations
                      for several businesses in the F&B sector. He specializes
                      in manufacturing, operations and process development.
                    </p>
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

export default Team;
