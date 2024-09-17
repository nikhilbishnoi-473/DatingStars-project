import React from "react";
import smallImageFirst from "../assets/image/png/small-image.png";
import fiveStar from "../assets/image/svg/five-stars.svg";

const Clients = () => {
  return (
    <div className="container max-w-[1164px] mx-auto px-3 pt-[150px]">
      <div className=" flex justify-center">
        <h3 className="max-w-[510px] text-center font-raleway font-semibold text-[40px] leading-[48px] text-white ">
          Here’s what our <span className=" text-yellow">clients say</span>{" "}
          about us....
        </h3>
      </div>
      <div className=" flex justify-between pt-[60px] pb-[94px]">
        <div className=" max-w-[558px] rounded-[22px] border border-[#FFFFFF33] bg-[#FFFFFF1A] p-5">
          <div className=" flex justify-center ">
            <div className=" flex flex-col items-center text-center pt-4">
              <img src={smallImageFirst} alt="fiveStar" />
              <img className="pt-4" src={fiveStar} alt="fiveStar" />
              <p className=" font-inter font-normal text-base leading-6 text-white max-w-[518px] opacity-70">
                Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus
                vitae elit dictum eros cras sagittis. Ac in sem mi ipsum urna.
                Sed feugiat semper nulla amet sit in sed interdum proin.
                Molestie volutpat fermentum amet tempor in nulla elit viverra
                sed.
              </p>
              <h4 className=" font-raleway font-semibold text-2xl leading-9 text-yellow ">
                Jaydon Bator
              </h4>
              <h4 className=" font-inter font-normal text-base leading-6 text-white pt-4">
                Sr. Designer
              </h4>
            </div>
          </div>
        </div>
        <div className=" max-w-[558px] rounded-[22px] border border-[#FFFFFF33] bg-[#FFFFFF1A] p-5">
          <div className=" flex justify-center ">
            <div className=" flex flex-col items-center text-center pt-4">
              <img src={smallImageFirst} alt="fiveStar" />
              <img className="pt-4" src={fiveStar} alt="fiveStar" />
              <p className=" font-inter font-normal text-base leading-6 text-white max-w-[518px] opacity-70">
                Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus
                vitae elit dictum eros cras sagittis. Ac in sem mi ipsum urna.
                Sed feugiat semper nulla amet sit in sed interdum proin.
                Molestie volutpat fermentum amet tempor in nulla elit viverra
                sed.
              </p>
              <h4 className=" font-raleway font-semibold text-2xl leading-9 text-yellow ">
                Jaydon Bator
              </h4>
              <h4 className=" font-inter font-normal text-base leading-6 text-white pt-4">
                Sr. Designer
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
