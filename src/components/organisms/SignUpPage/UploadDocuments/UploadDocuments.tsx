import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React from "react";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";

import { ButtonProperties, errorMessages } from "@shared/libs/helpers";

import "react-datepicker/dist/react-datepicker.css";

interface UploadDocumentsProps {
  isRegistered: boolean;
}

const UploadDocuments: React.FC<UploadDocumentsProps> = ({ isRegistered }) => {
  const { getRootProps, getInputProps } = useDropzone();

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    // todo
  };

  const initialState = {
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    businessCountry: "",
  };

  interface Values {
    businessName: string;
    businessEmail: string;
    businessPhone: string;
    businessCountry: string;
  }

  const AddBusinessSchema = Yup.object().shape({
    businessName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    businessEmail: Yup.string().email("Invalid email").required(errorMessages.required),
    businessPhone: Yup.number().min(11, errorMessages.minChar(11)).max(50, "Too Long!").required(errorMessages.required),
    businessCountry: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  });

  return (
    <>
      <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit} validationSchema={AddBusinessSchema}>
        {(props: FormikProps<Values>) => (
          <Form>
            <div className="relative space-y-[2.313rem]">
              <div className="relative">
                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="businessName"
                  placeholder="Enter Business Name"
                  type="text"
                />
                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="businessPhone"
                  placeholder="Enter Business Phone Number"
                  type="number"
                />
                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="businessEmail"
                  placeholder="Enter Business Email Address"
                  type="email"
                />
                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="businessCountry"
                  placeholder="Enter Country"
                  type="text"
                />
              </div>
              {isRegistered && (
                <div
                  className="w-[19.188rem] tablet:w-full h-[9.75rem] tablet:h-[12.5rem] flex justify-center flex-col items-center cursor-pointer "
                  id="upload"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <div className="flex justify-center mb-[2.125rem]">
                    <Icon className="block text-center" name="upload" />
                  </div>
                  <p className="text-14 font-medium opacity-70">Upload Business Certificate/License</p>
                </div>
              )}
              <div className="w-[19.188rem] tablet:w-full h-[9.75rem] tablet:h-[12.5rem] flex justify-center flex-col items-center cursor-pointer " id="upload" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="flex justify-center mb-[2.125rem]">
                  <Icon className="block text-center" name="upload" />
                </div>
                <p className="text-14 font-medium opacity-70">Upload a valid ID card</p>
                <p className="text-14 font-medium opacity-70">(*This could be an International Passport, Driver’s License, or Voter’s Card</p>
              </div>
              <div className="w-[19.188rem] tablet:w-full h-[9.75rem] tablet:h-[12.5rem] flex justify-center items-center flex-col cursor-pointer " id="upload" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="flex justify-center mb-[2.125rem]">
                  <Icon name="upload" />
                </div>
                <p className="text-14 font-medium opacity-70">Upload a valid utility bill</p>
              </div>
            </div>
            <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
              <CustomButton
                customClass="mt-12"
                handleClick={() => {}}
                size={ButtonProperties.SIZES.big}
                title="REGISTER ME"
                type="submit"
                variant={ButtonProperties.VARIANT.primary.name}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UploadDocuments;
