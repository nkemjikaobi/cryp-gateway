import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import toast, { Toaster } from "react-hot-toast";
import Toggle from "react-toggle";

import "react-toggle/style.css";

import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import ProveYourIdentity from "@components/organisms/modals/ProveYourIdentity/ProveYourIdentity";
import SecurityQuestionAndAnswer from "@components/organisms/SignUpPage/SecurityQuestionAndAnswer/SecurityQuestionAndAnswer";

import InvoiceMonkey from "@images/dashboard/invoice/invoiceMonkey.png";

const Profile = () => {
  const { getRootProps, getInputProps } = useDropzone();
  const [isBusinessActive, setIsBusinessActive] = useState<boolean>(false);
  const [showSecurityQuestion, setShowSecurityQuestion] = useState<boolean>(false);
  const [loading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<boolean>(false);
  const router = useRouter();

  const callBack = () => {
    setShowSecurityQuestion(false);
    setQuestions(true);
  };

  const resetQuestions = () => {
    router.push("/dashboard/profile");
    toast.success("Security question re-set successfully!");
  };

  return (
    <>
      <div className="w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto px-4 smallLaptop:pl-[3.375rem] smallLaptop:pr-[3.938rem] mt-[6.5rem] mb-32">
        <Toaster position="top-center" />

        <div className="flex justify-between items-center">
          <div className="cursor-pointer relative w-[10rem] h-[9.375rem]" {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="w-[10rem] h-[9.375rem] relative">
              <Image className="rounded-full" height={150} src={InvoiceMonkey} width={160} />
              <Icon className="absolute bottom-0 right-5" name="camera" />
            </div>
          </div>
          <h5
            className="ml-[30px] smallLaptop:ml-0 text-14 smallLaptop:text-18 font-medium text-crypGreen-800 flex items-center cursor-pointer mb-[5.625rem] whitespace-nowrap"
            onClick={() => setIsBusinessActive(!isBusinessActive)}
          >
            SWITCH ACCOUNT <Icon className="ml-4" name="yellowArrowRight" />
          </h5>
        </div>
        <h4 className="font-medium text-24 mt-[14px] mb-[110px]">@Adedam0la</h4>
        {isBusinessActive ? (
          <div>
            {BusinessProfileData.map((business) => (
              <div className="flex items-center text-14 font-medium mb-[20px]" key={business.id}>
                <h4 className="opacity-70 mr-[10px]">{business.property}:</h4>
                <h4>{business.value}</h4>
              </div>
            ))}
          </div>
        ) : (
          <h5
            className="uppercase text-16 smallLaptop:text-18 font-medium text-crypGreen-800 flex items-center cursor-pointer"
            onClick={() => router.push("/dashboard/profile/add-a-business-account")}
          >
            add a business account <Icon className="ml-4" name="yellowArrowRight" />
          </h5>
        )}

        <div className="mb-[5.5rem] mt-[5.625rem]">
          <h3 className="text-16 smallLaptop:text-18 font-medium">Notification Settings</h3>
          <div>
            {NotificationTogglesData.map((notification) => (
              <div className="flex justify-between items-center mt-[2.438rem]" key={notification.id}>
                <h5 className="text-12 smallLaptop:text-14 font-medium">{notification.name}</h5>
                <label>
                  <Toggle defaultChecked={true} icons={false} onChange={(e) => console.log(e.target.checked)} />
                </label>
              </div>
            ))}
          </div>
        </div>
        <h5 className="text-16 smallLaptop:text-18 font-medium text-crypGreen-800 flex items-center cursor-pointer mb-[5.625rem]" onClick={() => setShowSecurityQuestion(true)}>
          Re-set Security Questions <Icon className="ml-4" name="yellowArrowRight" />
        </h5>
      </div>
      <CustomModal toggleVisibility={setShowSecurityQuestion} visibility={showSecurityQuestion}>
        <ProveYourIdentity callBack={callBack} loading={loading} />
      </CustomModal>
      <CustomModal toggleVisibility={setQuestions} visibility={questions}>
        <SecurityQuestionAndAnswer callBack={resetQuestions} isNotstepper={true} />
      </CustomModal>
    </>
  );
};

export default Profile;

const NotificationTogglesData = [
  {
    id: 1,
    name: "SMS (Stop receiving SMS notifications)",
  },
  {
    id: 2,
    name: "Daily Dictionary(Stop receiving daily Dictionary notifications)",
  },
];

const BusinessProfileData = [
  {
    id: 1,
    property: "Business Name",
    value: "Cokes Shopz",
  },
  {
    id: 2,
    property: "Phone Number",
    value: "+234 908 786 6754",
  },
  {
    id: 3,
    property: "Email",
    value: "cokeshopes@gmail.com",
  },
];
