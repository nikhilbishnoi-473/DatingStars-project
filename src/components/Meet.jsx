import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import sliderFirst from "../assets/image/png/slider-first.png";
import sliderSecond from "../assets/image/png/slider-img2.png";
import sliderThird from "../assets/image/png/slider-img3.png";
import sliderPrev from "../assets/image/png/slider-prev.png";
import sliderNext from "../assets/image/png/slider-next.png";
import calender from "../assets/image/svg/calender.svg";
import location from "../assets/image/svg/location.svg";
const Meet = () => {
  return (
    <div className="bg-black -mt-[2px]">
      <div className="container max-w-[1164px] mx-auto px-3 pt-[150px]">
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center">
            <h3 className="font-raleway font-semibold text-[40px] leading-[48px] text-white">
              Meet <span className="text-yellow">DatingStars</span>
            </h3>
            <p className="font-inter font-normal text-base opacity-70 max-w-[762px] text-white pt-4 leading-6">
              Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus
              vitae elit dictum eros cras sagittis.
            </p>
          </div>
        </div>
        <div className="relative pt-[60px]">
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: ".custom-prev-button",
              nextEl: ".custom-next-button",
            }}
            pagination={{ clickable: false }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={sliderFirst}
                alt="sliderFirst"
                className="w-full relative"
              />
              <div className="backdrop-blur-[3px] absolute bottom-[21px] w-full left-[27px] max-w-[309px] rounded-[6px] border border-[#FFFFFF66] bg-[#0000001A] p-[10px] ">
                <h3 className=" font-inter font-normal text-base leading-6 text-white ">
                  Affiliate World Europe
                </h3>
                <div className=" flex justify-between">
                  <div className=" flex gap-2">
                    <img src={calender} alt="calender" />
                    <h4 className=" font-inter text-[12px] leading-[18px] text-white ">
                      July 12th - 13th
                    </h4>
                  </div>
                  <div className=" flex gap-2">
                    <img src={location} alt="calender" />
                    <h4 className=" font-inter text-[12px] leading-[18px] text-white ">
                      Barcelona
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderSecond}
                alt="sliderSecond"
                className="w-full relative"
              />
              <div className="backdrop-blur-[3px] absolute bottom-[21px] w-full left-[27px] max-w-[309px] rounded-[6px] border border-[#FFFFFF66] bg-[#0000001A] p-[10px] ">
                <h3 className=" font-inter font-normal text-base leading-6 text-white ">
                  Affiliate World Asia
                </h3>
                <div className=" flex justify-between">
                  <div className=" flex gap-2">
                    <img src={calender} alt="calender" />
                    <h4 className=" font-inter text-[12px] leading-[18px] text-white ">
                      July 12th - 13th
                    </h4>
                  </div>
                  <div className=" flex gap-2">
                    <img src={location} alt="calender" />
                    <h4 className=" font-inter text-[12px] leading-[18px] text-white ">
                      Barcelona
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderThird}
                alt="sliderThird"
                className="w-full relative"
              />
              <div className="backdrop-blur-[3px] absolute bottom-[21px] w-full left-[27px] max-w-[309px] rounded-[6px] border border-[#FFFFFF66] bg-[#0000001A] p-[10px] ">
                <h3 className=" font-inter font-normal text-base leading-6 text-white ">
                  I-CON Conference
                </h3>
                <div className=" flex justify-between">
                  <div className=" flex gap-2">
                    <img src={calender} alt="calender" />
                    <h4 className=" font-inter text-[12px] leading-[18px] text-white ">
                      July 12th - 13th
                    </h4>
                  </div>
                  <div className=" flex gap-2">
                    <img src={location} alt="calender" />
                    <h4 className=" font-inter text-[12px] leading-[18px] text-white ">
                      Barcelona
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderFirst}
                alt="sliderFirst"
                className="w-full relative"
              />
              <div className="backdrop-blur-[3px] absolute bottom-[21px] w-full left-[27px] max-w-[309px] rounded-[6px] border border-[#FFFFFF66] bg-[#0000001A] p-[10px] ">
                <h3 className=" font-inter font-normal text-base leading-6 text-white ">
                  Affiliate World Europe
                </h3>
                <div className=" flex justify-between">
                  <div className=" flex gap-2">
                    <img src={calender} alt="calender" />
                    <h4 className=" font-inter text-[12px] leading-[18px] text-white ">
                      July 12th - 13th
                    </h4>
                  </div>
                  <div className=" flex gap-2">
                    <img src={location} alt="calender" />
                    <h4 className=" font-inter text-[12px] leading-[18px] text-white ">
                      Barcelona
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="custom-prev-button absolute top-[55%] left-[-47px] z-10 cursor-pointer">
            <button className="size-[34px] rounded-[100px] flex justify-center items-center ">
              <img src={sliderPrev} alt="sliderPrev" />
            </button>
          </div>
          <div className="custom-next-button absolute top-[55%] right-[-47px] z-10 cursor-pointer ">
            <button className="size-[34px] bg-white rounded-[100px] flex justify-center items-center ">
              <img src={sliderNext} alt="sliderPrev" />
            </button>
          </div>
        </div>
        <div className=" pt-[60px] flex justify-center">
          <button className="dark:bg-yellow focus:outline-none focus:ring-yellow dark:hover:bg-yellow dark:focus:ring-yellow focus:ring-4 font-raleway font-semibold text-base leading-6 text-black py-3 px-6 bg-yellow rounded-xl">
            Book A Meeting With Our Team!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meet;
