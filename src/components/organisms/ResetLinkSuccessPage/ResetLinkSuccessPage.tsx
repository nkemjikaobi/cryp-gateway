import React from "react";

import Icon from "@components/atoms/Icons";

const ResetLinkSuccess = () => {
  return (
    <>
      <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
        <h3 className="text-16 tablet:text-20 mb-[3.563rem] font-semibold">FORGOT PASSWORD</h3>
        <p className="text-14 tablet:text-18 font-semibold mt-[3.563rem] mb-[3.625rem] tablet:mb-[5.625rem]">A password re-set link has been sent to hustl*****@gmail.com</p>
        <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
          <button className="text-12 uppercase hover:text-crypYellow-300 smallLaptop:text-16 font-semibold text-crypYellow-200 flex items-center mb-12">
            RESEND LINK <Icon className="ml-4" name="yellowArrowRight" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ResetLinkSuccess;
