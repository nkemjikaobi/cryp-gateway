import { Dialog } from "@headlessui/react";
import axios from "axios";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import { JoinWaitListSchema } from "@components/modules/schemas/JoinWaitListSchema";

import { ButtonProperties } from "@shared/libs/helpers";

interface JoinWaitListProps {
  setThankYou: Function;
  setJoinWaitList: Function;
}
const JoinWaitList = ({ setThankYou, setJoinWaitList }: JoinWaitListProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialState = {
    name: "",
    email: "",
    country: "",
  };

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    setLoading(true);
    try {
      const res = await axios.post("https://app.cryp.africa/subscribe", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data.success === true) {
        actions.resetForm();
        setJoinWaitList(false);
        setThankYou(true);
      } else {
        toast.error("An error occurred!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("An error occurred");
      setLoading(false);
    }
  };

  interface Values {
    name: string;
    email: string;
    country: string;
  }

  return (
    <div className="flex flex-col relative justify-center rounded-2xl items-center w-[27rem] h-full tablet:w-[41.75rem] tablet:h-[40.5rem]">
      <div className="bg-glass-100 rounded-[10.313rem] absolute top-0 left-0 backdrop-blur-[100px] h-full w-full" />
      <div className="flex items-center relative">
        <Icon className="absolute left-52 tablet:left-80  top-4 cursor-pointer" name="cancel" onClick={() => setJoinWaitList(false)} />
        <Dialog.Title as="h4" className="mb-4 -ml-8 tablet:-ml-32  capitalize text-md tablet:text-[1.875rem] whitespace-nowrap font-medium mt-8">
          Get Notified
        </Dialog.Title>
        <Icon className="ml-4 w-[40%] tablet:w-full tablet:ml-8 mt-6" name="yellowLine" />
      </div>
      <p className="capitalize text-md tablet:text-[1.875rem] -ml-16 opacity-95 text-white">
        when <span className="text-crypYellow-200">we launch</span>
      </p>
      <div className="w-full p-4 tablet:p-8 text-white opacity-95">
        <div className="">
          <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={JoinWaitListSchema}>
            {(props: FormikProps<Values>) => (
              <Form>
                <div className="w-[75%] tablet:w-[80%] tablet:pl-8 tablet:mt-8">
                  <FormikCustomInput
                    className="!inline-block !border-b-[1px]"
                    container="!bg-transparent text-white !px-0"
                    inputClassName="!bg-transparent placeholder:!font-medium placeholder:!text-base placeholder:!text-gray-400"
                    name="name"
                    placeholder="Enter your firstname here"
                    type="text"
                  />
                  <FormikCustomInput
                    className="!inline-block !border-b-[1px] mt-8 tablet:mt-12"
                    container="!bg-transparent text-white !px-0"
                    inputClassName="!bg-transparent placeholder:!font-medium !text-base placeholder:!text-gray-400"
                    name="email"
                    placeholder="Enter your email address here"
                    type="email"
                  />
                  <FormikCustomInput
                    className="!inline-block !border-b-[1px] mt-8 tablet:mt-12"
                    container="!bg-transparent text-white !px-0"
                    inputClassName="!bg-transparent placeholder:!font-medium !text-base placeholder:!text-gray-400"
                    name="country"
                    placeholder="What country are you from? (Optional)"
                    type="text"
                  />
                </div>
                <div className="bg-citiBlue-200 text-center mt-16 rounded-md w-[10.25rem] tablet:w-[8.809rem] ml-[20%] tablet:ml-[30%]">
                  <CustomButton
                    handleClick={() => {}}
                    isDisabled={loading}
                    isSubmitting={loading}
                    size={ButtonProperties.SIZES.small}
                    title="notify me"
                    type="submit"
                    variant={ButtonProperties.VARIANT.primary.name}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>{" "}
    </div>
  );
};

export default JoinWaitList;
