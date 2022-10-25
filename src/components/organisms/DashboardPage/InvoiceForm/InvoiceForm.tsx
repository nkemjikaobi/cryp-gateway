import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

interface InvoiceFormProps {
  setIsLinkGenerated: Function;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ setIsLinkGenerated }) => {
  const { getRootProps, getInputProps } = useDropzone();
  const [loading, setLoading] = useState<boolean>(false);

  const generateLink = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLinkGenerated(true);
    }, 3000);
  };

  return (
    <div className="bg-white w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto rounded-[3.125rem] shadow-auth px-4 smallLaptop:px-6 mt-[6.5rem] mb-32 text-12 smallLaptop:text-16">
      <div
        className="w-[15.188rem] flex justify-center flex-col items-center cursor-pointer mx-auto my-[2.688rem] bg-crypBlue-200 rounded-[1.875rem] p-5"
        id=""
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="flex justify-center mb-[1.313rem]">
          <Icon className="block text-center" name="upload" />
        </div>
        <p className="text-14 font-medium">Upload logo here</p>
      </div>
      <h3 className="uppercase text-center text-20 font-bold text-crypYellow-200">invoice</h3>
      <h4 className="text-14 font-medium text-center text-crypGreen-800 mb-[3.75rem] mt-[2.063rem]">Date: July 23rd, 2022</h4>
      <div className="relative">
        <>
          <CustomLabel className="mb-[0.438rem]" title="Name of Product/Service" />
          <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem]" name="username" type="text" />
        </>

        <>
          <CustomLabel className="mb-[0.438rem]" title="Quantity(optional)" />
          <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem]" name="username" type="text" />
        </>

        <>
          <CustomLabel className="mb-[0.438rem]" title="Unit Price(optional)" />
          <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem]" name="email" type="text" />
        </>

        <>
          <CustomLabel className="mb-[0.438rem]" title="Amount Due" />
          <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem]" name="username" type="text" />
        </>

        <>
          <CustomLabel className="mb-[0.438rem]" title="Total Price" />
          <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem]" name="" type="text" />
        </>
        <>
          <CustomLabel className="mb-[0.438rem]" title="Decription(optional)" />
          <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem] h-[8.563rem]" name="username" type="textarea" />
        </>
        <>
          <CustomLabel className="mb-[0.438rem]" title="Note(optional)" />
          <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem] h-[6.563rem]" name="username" type="textarea" />
        </>
      </div>
      <div className="flex flex-col pb-[4.563rem] justify-center items-center">
        <CustomButton
          customClass="mt-12"
          handleClick={() => generateLink()}
          isDisabled={loading}
          isSubmitting={loading}
          size={ButtonProperties.SIZES.big}
          title="GENERATE LINK"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
    </div>
  );
};

export default InvoiceForm;
