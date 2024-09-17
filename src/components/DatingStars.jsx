import React from "react";
import { CARD_MAP } from "./common/Helper";
import Icon from "../components/common/Icon";

const DatingStars = () => {
  return (
    <div className="bg-black">
      <div className=" container max-w-[1164px] px-3 mx-auto pt-[195px]">
        <div className=" flex justify-center pb-[46px] ">
          <div className=" flex flex-col items-center">
            <h1 className=" font-raleway font-semibold text-[40px] leading-[48px] text-white ">
              Why <span className=" text-yellow">DatingStars?</span>
            </h1>
            <p className="font-inter font-normal text-base leading-6 text-white max-w-[759px] text-center opacity-70  pt-[22px]">
              DatingStars has been founded in 2023, but our management team has
              10 years+ experience in the casual dating vertical and has
              developed the best products available in the market.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3">
          {CARD_MAP.map((obj, index) => (
            <div className="lg:w-4/12 md:w-6/12 w-full px-3 pt-6 max-lg:flex justify-center">
              <div className="max-w-[364px] group cards rounded-[22px] duration_500 border border-[#FFFFFF4D] hover:bg-[#F7B1030D] hover:border-yellow px-5 pt-5 min-h-[248px]  bg-[#FFFFFF1A] ">
                <div className=" " key={index}>
                  <div className=" size-[60px] rounded-[100px] group-hover:bg-yellow bg-[#FFFFFF30] flex justify-center items-center  ">
                    <Icon className="svgHover" iconName={obj.img} />
                  </div>
                  <h2 className="pt-6 font-raleway font-semibold text-2xl leading-9 text-white ">
                    {obj.text}
                  </h2>
                  <p className=" font-inter font-normal text-base leading-6  text-white opacity-70 max-w-[324px] pt-4">
                    {obj.para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatingStars;
