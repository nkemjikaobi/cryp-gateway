import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React from "react";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import yupPassword from "yup-password";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import FormikCustomSelect from "@components/atoms/FormikCustomSelect/FormikCustomSelect";
import Icon from "@components/atoms/Icons";
import ScanQRMoreInfo from "@components/organisms/modals/ScanQRMoreInfo/ScanQRMoreInfo";

import { ButtonProperties, errorMessages } from "@shared/libs/helpers";

yupPassword(Yup); // extend yup

const CreateNFT = () => {
  const { getRootProps, getInputProps } = useDropzone();

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    // todo
  };

  const initialState = {
    creationType: "",
    creationName: "",
    creationPrice: 0,
    optionType: "",
  };

  interface Values {
    creationType: string;
    creationName: string;
    creationPrice: number;
    optionType: string;
  }

  const CreateNFTSchema = Yup.object().shape({
    creationType: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    creationName: Yup.string().email("Invalid email").required(errorMessages.required),
    creationPrice: Yup.number().required(errorMessages.required),
    optionType: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  });

  return (
    <div className="bg-white w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto rounded-[3.125rem] shadow-auth px-4 smallLaptop:px-6 mt-[4rem] smallLaptop:mt-[6.5rem] mb-32 text-12 smallLaptop:text-16">
      <div className="relative">
        <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit} validationSchema={CreateNFTSchema}>
          {(props: FormikProps<Values>) => (
            <Form>
              <div className="relative space-y-[2.313rem]">
                <div className="relative pt-[100px]">
                  <div
                    className="w-[19.188rem] tablet:w-full h-[9.75rem] tablet:h-[12.5rem] flex justify-center flex-col items-center cursor-pointer "
                    id="upload2"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <div className="flex justify-center mb-[2.125rem]">
                      <Icon className="block text-center" name="upload" />
                    </div>
                    <p className="text-14 font-medium opacity-70">Upload single item here</p>
                  </div>
                  <div className="mt-[50px]">
                    <CustomLabel className="text-14" title="Select Creation Type " />
                    <FormikCustomSelect className="h-16 rounded-md border" name="creationType" parentContainer="my-4" />
                  </div>
                  <div className="mt-[50px]">
                    <CustomLabel className="text-14" title="Name Your Creation" />
                    <FormikCustomInput
                      className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                      container="tablet:px-6"
                      inputClassName="placeholder:text-xs border-black"
                      name="creationName"
                      placeholder="Avatar Aang"
                      type="text"
                    />
                  </div>
                  <div className="mt-[50px]">
                    <CustomLabel className="text-14" title="Selling Price" />
                    <FormikCustomInput
                      className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                      container="tablet:px-6"
                      inputClassName="placeholder:text-xs border-black"
                      name="creationPrice"
                      placeholder="NGN 0.00"
                      type="number"
                    />
                    <div className="flex items-center justify-between w-[203px] ml-[44px] text-14 font-semibold">
                      <p>BTC 0.00</p>
                      <p>|</p>
                      <p>USD 0.00</p>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <div className="flex items-center relative">
                      <CustomLabel className="text-14" title="Select an option " />{" "}
                      <ScanQRMoreInfo
                        customClass="left-[100px]"
                        message="For Items/products that have a physical copy, a QR code will be attached to it so that the buyer can scan for authenticity "
                      />
                    </div>
                    <FormikCustomSelect className="h-16 rounded-md border" name="optionType" parentContainer="my-4" />
                  </div>
                </div>
                <div className="mt-[50px]">
                  <CustomLabel className="text-14" title="Describe Your Creation" />
                  <textarea className="border rounded-[0.25rem] w-full h-[8.438rem] mr-4 mt-2 mb-4 placeholder:text-base" name="description" />
                </div>
              </div>
              <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
                <CustomButton
                  customClass="mt-12 mb-8"
                  handleClick={() => {}}
                  size={ButtonProperties.SIZES.big}
                  title="CREATE NFT"
                  type="submit"
                  variant={ButtonProperties.VARIANT.primary.name}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateNFT;
