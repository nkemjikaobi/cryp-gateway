import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDropzone } from "react-dropzone";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

import { ButtonProperties } from "@shared/libs/helpers";

import "react-datepicker/dist/react-datepicker.css";

interface UserDetailsProps {
  step: StepProps;
}
const UploadDocuments = ({ step }: UserDetailsProps) => {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <>
      <h3 className="text-16 tablet:text-20 font-semibold">Document Upload</h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">Help us know you better, to serve you better</div>
      <div className="relative space-y-[2.313rem]">
        <DatePicker
          customInput={
            <CustomInput
              className="border rounded-[0.125rem] h-[2.813rem] mr-4 mt-2 mb-4"
              container="!pl-0 !pr-[0.3rem]"
              icon="calendar2"
              iconPosition="end"
              id="date"
              inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black bg-citiBlue-80"
              name="arrivalTime"
              type="text"
            />
          }
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          onChange={(date: Date) => setDepartureDate(date)}
          placeholderText="Date of Birth"
          selected={departureDate}
        />
        <div className="w-[307px] tablet:w-[585px] h-[156px] tablet:h-[200px] flex justify-center flex-col items-center cursor-pointer " id="upload" {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="flex justify-center mb-[34px]">
            <Icon className="block text-center" name="upload" />
          </div>
          <p className="text-14 font-medium">Upload a valid ID card</p>
        </div>
        <div className="w-[307px] tablet:w-[585px] h-[156px] tablet:h-[200px] flex justify-center items-center flex-col cursor-pointer " id="upload" {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="flex justify-center mb-[34px]">
            <Icon name="upload" />
          </div>
          <p className="text-14 font-medium">Upload a valid utility bill</p>
        </div>
      </div>
      <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
        <CustomButton
          customClass="px-4 w-[230px] text-12 tablet:text-16 h-[3.75] bigLaptop:h-[5rem] mt-12"
          handleClick={() => step.goNextStep()}
          isDisabled={true}
          size={ButtonProperties.SIZES.medium}
          title="NEXT"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <CustomLink
          customClass="text-12 uppercase hover:text-crypYellow-300 smallLaptop:text-16 font-semibold text-crypYellow-200 flex items-center mb-12"
          destination="/auth/sign-up"
        >
          skip for now <Icon className="ml-4" name="yellowArrowRight" />
        </CustomLink>
      </div>
    </>
  );
};

export default UploadDocuments;
