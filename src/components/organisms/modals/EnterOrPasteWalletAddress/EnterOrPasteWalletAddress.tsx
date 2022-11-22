import { Dialog } from "@headlessui/react";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React from "react";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";

import { ButtonProperties, errorMessages } from "@shared/libs/helpers";

import ScanQRMoreInfo from "../ScanQRMoreInfo/ScanQRMoreInfo";

const EnterOrPasteWalletAddress = () => {
  const initialState = {
    walletAddress: "",
  };

  interface Values {
    walletAddress: string;
  }

  const WalletAddressSchema = Yup.object().shape({
    walletAddress: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  });

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    // todo
  };

  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] mx-[1.875rem] px-[1.125rem] tablet:px-16 bg-white text-black">
      <Dialog.Title as="h3" className="text-16  text-center tablet:text-20 font-medium pt-[3.063rem] smallLaptop:pt-[4.313rem]">
        Wallet Address
      </Dialog.Title>
      <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit} validationSchema={WalletAddressSchema}>
        {(props: FormikProps<Values>) => (
          <Form>
            <div className="mt-[3rem] mb-[1.75rem]">
              <FormikCustomInput
                className="border border-glass-450 rounded-[5px] h-[3.75rem] mr-4 "
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="lastName"
                placeholder="Enter / Paste Wallet Address Here"
                type="text"
              />
            </div>
          </Form>
        )}
      </Formik>
      <p className="text-center text-14 tablet:text-18 font-medium my-[2.813rem]">Or</p>
      <p className="text-center text-14 tablet:text-18 mb-[4.313rem] text-crypGreen-800 font-medium my-[2.813rem] flex items-center justify-center">
        Scan An Address Code <ScanQRMoreInfo message="Scan the wallet QR Code to get the address. Works best on a mobile view" />
      </p>
      <div className="flex items-center justify-center">
        <CustomButton customClass="mb-12" handleClick={() => {}} size={ButtonProperties.SIZES.big} title="SEND" variant={ButtonProperties.VARIANT.primary.name} />
      </div>
    </div>
  );
};

export default EnterOrPasteWalletAddress;
