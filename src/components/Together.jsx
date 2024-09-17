import React from "react";
import messageBox from "../assets/image/svg/message-box.svg";
const Together = () => {
  return (
    <div className="container max-w-[1164px] mx-auto px-3 pt-[150px]">
      <div className=" flex flex-wrap flex-row -mx-3 items-center ">
        <div className=" w-6/12 px-3">
          <h3 className=" font-raleway font-semibold text-[40px] leading-[48px] text-white">
            Let’s work together
          </h3>
          <p className=" font-inter font-normal text-base leading-6 text-white opacity-70 max-w-[474px] pt-4">
            Building long term relationships with advertisers and publisher, is
            at core of our business
          </p>
          <h4 className=" font-raleway font-semibold text-2xl leading-9 text-white pt-10">
            Get in touch
          </h4>
          <p className=" font-inter font-normal text-base leading-6 text-white opacity-70 max-w-[474px] pt-3">
            Feel free to send us an email or complete the form, we are always
            happy to answer your questions and meet you.
          </p>
          <div className=" flex gap-3 items-center pt-5">
            <img src={messageBox} alt="" />
            <p className=" font-inter font-normal text-base text-white ">
              support@datingstars.com
            </p>
          </div>
        </div>
        <div className=" w-6/12 px-3">
          <div className="max-w[565px] rounded-[22px] bg-[#F7B1031A] p-[50px]">
            <div className="">
              <form class="max-w-md mx-auto">
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      class=" border border-[#828282] max-w-[222px] w-full list-none outline-none font-inter font-normal text-base leading-6 text-white pl-5 rounded-[10px] py-3 bg-transparent "
                      placeholder="first Name"
                      required
                    />
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      class=" border border-[#828282] max-w-[222px] w-full list-none outline-none font-inter font-normal text-base leading-6 text-[#828282] pl-5 rounded-[10px] py-3 bg-transparent "
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    class=" border border-[#828282] max-w-[465px] w-full list-none outline-none font-inter font-normal text-base leading-6 text-[#828282] pl-5 rounded-[10px] py-3 bg-transparent "
                    placeholder="Email*"
                    required
                  />
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    rows="4"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    class=" border border-[#828282] max-w-[465px] w-full list-none outline-none font-inter font-normal text-base leading-6 text-[#828282] pl-5 rounded-[10px] py-3 bg-transparent "
                    placeholder="Phone Number*"
                    required
                  />
                </div>
                <div className="">
                  <textarea
                    placeholder="Your message..."
                    class="border border-[#828282] max-w-[465px] w-full outline-none font-inter font-normal text-base leading-6 text-[#828282] pl-5 rounded-[10px] py-3 bg-transparent h-[140px]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="font-raleway mt-10 font-semibold text-base leading-6 text-black py-3 px-6 bg-yellow rounded-xl hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-yellow w-full sm:w-auto text-center dark:bg-yellow dark:hover:bg-yellow dark:focus:ring-yellow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Together;
