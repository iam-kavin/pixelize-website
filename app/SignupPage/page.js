import React from "react";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";

const SignupPage = () => {
  return (
    <div className="bg-[#191919] text-white h-[56.25rem] pt-4">
      <Navigation />
      <div className="w-[95%] mx-auto mt-[6.25rem] flex justify-between flex-wrap">
        <div className="flex flex-col w-[30%]">
          <div className="flex justify-center">
            <img
              src="./images/img_rectangle_221.png"
              alt="image"
              className="w-[27.3125rem] h-[16.6875rem] rounded-t-[2.5rem]"
            />
          </div>
          <h4 className="mt-[6.25rem] h-[6rem] text-[1.5rem] font-light leading-[2rem] text-left">
            We’d love to hear from you. Whether you’re just curious, or ready to get started with Arcurve, we’re ready to answer any and all of your questions. Submit the form below, or find our direct contact at the bottom in the site footer.


          </h4>
          {/* <h5 className="w-[17.625rem] h-[1.75rem] mt-[1.875rem] text-[1.125rem] font-normal leading-[1.75rem] text-left">
            Johnson Root
          </h5>
          <h6 className="w-[12.4375rem] h-[1.75rem] mt-[0.625rem] text-[0.875rem] font-light leading-[1.75rem] text-left">
            Creative Director, Black Wheel
          </h6> */}
        </div>
        <div className="p-[2.5rem] pt-[3.75rem] w-[54%] h-[33.125rem] rounded-[2.5rem] bg-[#2a2a2a] flex flex-col justify-between">
          <h5 className="w-[30.0625rem] h-[2.5rem] text-[2rem] font-light leading-[2.5rem] text-left">
            Let’s start at the very beginning
          </h5>
          <form className="flex flex-col justify-between gap-[3.75rem]">
            <div className="flex flex-col gap-[0.9375rem]">
              <input
                type="text"
                placeholder="Name"
                className="max-w-[43.9375rem] h-[3.625rem] rounded-[0.75rem] bg-[#252525] border border-[#3f3f3f] text-[0.875rem] font-light leading-[1.09375rem] pl-[5%]"
              />
              <input
                type="email"
                placeholder="Email"
                className="max-w-[43.9375rem] h-[3.625rem] rounded-[0.75rem] bg-[#252525] border border-[#3f3f3f] text-[0.875rem] font-light leading-[1.09375rem] pl-[5%]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="max-w-[43.9375rem] h-[3.625rem] rounded-[0.75rem] bg-[#252525] border border-[#3f3f3f] text-[0.875rem] font-light leading-[1.09375rem] pl-[5%]"
              />
              <input
                type="text"
                placeholder="Company"
                className="max-w-[43.9375rem] h-[3.625rem] rounded-[0.75rem] bg-[#252525] border border-[#3f3f3f] text-[0.875rem] font-light leading-[1.09375rem] pl-[5%]"
              />
            </div>
            <button className="w-[7.875rem] h-[3.5rem] rounded-[1.75rem] bg-[#bef264] text-black">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignupPage;