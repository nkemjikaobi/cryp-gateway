import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

interface DeleteBankAccountProps {
  setDeleteAccount: Function;
}

const DeleteBankAccount: React.FC<DeleteBankAccountProps> = ({ setDeleteAccount }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const deleteBankAccount = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Account deleted!");
      setDeleteAccount(false);
    }, 3000);
  };

  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] h-[23rem] tablet:h-[38.188rem] mx-[1.875rem] px-[1.125rem] tablet:pt-[10.875rem] tablet:px-16 bg-white text-black">
      <div className="relative">
        <div className="">
          <h3 className="text-14 py-8 smallLaptop:pt-[3.688rem] tablet:text-16 font-semibold text-center">Are you sure you want to delete this account?</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CustomButton
          customClass="mt-[2.75rem]"
          handleClick={() => deleteBankAccount()}
          isDisabled={loading}
          isSubmitting={loading}
          size={ButtonProperties.SIZES.big}
          title="DELETE"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <span
          className="uppercase cursor-pointer hover:text-crypYellow-300 text-crypYellow-200 mt-[3.75rem] mb-[4.313rem] font-bold text-14 smallLaptop:text-base text-center"
          onClick={() => setDeleteAccount(false)}
        >
          cancel
        </span>
      </div>
    </div>
  );
};

export default DeleteBankAccount;
