import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import DeleteBankAccount from "@components/organisms/modals/DeleteBankAccount/DeleteBankAccount";
import InputTransactionPin from "@components/organisms/modals/InputTransactionPin/InputTransactionPin";

import { ButtonProperties } from "@shared/libs/helpers";

import SingleBankAccount from "../SingleBankAccount/SingleBankAccount";
import TransactionAmount from "../TransactionAmount/TransactionAmount";

const BankAccounts = () => {
  const [activeBank, setActiveBank] = useState<number>(-1);
  const [hasSelectedBank, setHasSelectedBank] = useState<boolean>(false);
  const [deleteAccount, setDeleteAccount] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const withdrawFunds = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
      toast.success("Money withdrawn successfully!");
    }, 3000);
  };

  const handleBankSelection = (identifier: number) => {
    setActiveBank(identifier);
  };
  return (
    <>
      <div className="w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto">
        <Toaster position="top-center" />
        <TransactionAmount />
        <div className="flex items-center justify-between">
          <div>
            <h5>All</h5>
            <p className="mt-[1.25rem] mb-[4.125rem]"> (NGN 0.00)</p>
          </div>
          {activeBank === -1 ? (
            <Icon className="cursor-pointer" name="radioFilled" onClick={() => handleBankSelection(-1)} />
          ) : (
            <Icon className="cursor-pointer" name="radio" onClick={() => handleBankSelection(-1)} />
          )}
        </div>
        <div>
          <h4 className="font-semibold text-crypGreen-800 mb-[2.563rem]">Select a bank account</h4>
          <div className="h-[16.25rem] overflow-y-scroll">
            {BankAccountsData.map((bankAccount) => (
              <SingleBankAccount
                activeBank={activeBank}
                bankAccount={bankAccount}
                handleBankSelection={handleBankSelection}
                key={bankAccount.id}
                setDeleteAccount={setDeleteAccount}
              />
            ))}
          </div>
          <CustomLink customClass="text-crypGreen-800 pt-[3.313rem] pb-[2.813rem]" destination="/dashboard/withdraw/link-bank-account">
            Add new bank account
          </CustomLink>
          <div className="flex items-center justify-center">
            <CustomButton
              customClass="mt-12 mb-12"
              handleClick={() => setHasSelectedBank(true)}
              size={ButtonProperties.SIZES.big}
              title="CONTINUE"
              variant={ButtonProperties.VARIANT.primary.name}
            />
          </div>
        </div>
      </div>
      <CustomModal toggleVisibility={setHasSelectedBank} visibility={hasSelectedBank}>
        <InputTransactionPin callBack={withdrawFunds} loader={loading} />
      </CustomModal>
      <CustomModal toggleVisibility={setDeleteAccount} visibility={deleteAccount}>
        <DeleteBankAccount setDeleteAccount={setDeleteAccount} />
      </CustomModal>
    </>
  );
};

export default BankAccounts;

const BankAccountsData = [
  {
    id: 1,
    logo: "",
    accountName: "Odofin Adedamola Taofeekat",
    bankName: "Guarantee Trust Bank",
    accountNumber: "0123456789",
  },
  {
    id: 2,
    logo: "",
    accountName: "Odofin Adedamola Taofeekat",
    bankName: "Guarantee Trust Bank",
    accountNumber: "0123456789",
  },
  {
    id: 3,
    logo: "",
    accountName: "Odofin Adedamola Taofeekat",
    bankName: "Guarantee Trust Bank",
    accountNumber: "0123456789",
  },
];
