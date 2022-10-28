import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import InputTransactionPin from "@components/organisms/modals/InputTransactionPin/InputTransactionPin";

import { ButtonProperties } from "@shared/libs/helpers";

import TransactionAmount from "../TransactionAmount/TransactionAmount";

const SendCrypAssets = () => {
  const [activeBank, setActiveBank] = useState<number>(-1);
  const [hasSelectedBank, setHasSelectedBank] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleBankSelection = (identifier: number) => {
    setActiveBank(identifier);
  };

  const sendToCrypAssets = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Money sent to your PRIME WALLET successfully!!");
      router.push("/dashboard");
    }, 3000);
  };

  const initialState = {
    email: "",
  };

  interface Values {
    email: string;
  }

  const handleSubmit = () => {
    // todo
  };

  return (
    <>
      <div className="w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto mt-[4.188rem]">
        <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit}>
          {(props: FormikProps<Values>) => (
            <Form>
              <div className="relative space-y-[2.313rem]">
                <div className="relative">
                  <FormikCustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                    container="tablet:px-6"
                    inputClassName="placeholder:text-xs border-black"
                    name="email"
                    placeholder="Enter the users email address"
                    type="email"
                  />
                </div>
              </div>
              <Toaster position="top-center" />
              <h4 className="font-medium text-crypRed-500 text-center py-[2.188rem]">*You can only send funds from your OTHER COINS/TOKENS to your CRYP TOKENS</h4>
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
              <div className="flex items-center justify-center">
                <CustomButton
                  customClass="mt-12 mb-12"
                  handleClick={() => setHasSelectedBank(true)}
                  size={ButtonProperties.SIZES.big}
                  title="CONTINUE"
                  variant={ButtonProperties.VARIANT.primary.name}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <CustomModal toggleVisibility={setHasSelectedBank} visibility={hasSelectedBank}>
        <InputTransactionPin callBack={sendToCrypAssets} loader={loading} />
      </CustomModal>
    </>
  );
};

export default SendCrypAssets;
