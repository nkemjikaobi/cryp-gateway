import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { QuestionProps } from "src/store/auth";
import { AppState } from "src/store/rootReducer";

import { crypToast } from "@components/atoms/CrypToast/CrypToast";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import CustomLink from "@components/atoms/CustomLink/CustomLink";

import { ButtonProperties, NotificationTypes } from "@shared/libs/helpers";

interface ProveYourIdentityProps {
  callBack?: Function;
  hasCustomCallBack?: boolean;
}
const ProveYourIdentity: React.FC<ProveYourIdentityProps> = ({ callBack, hasCustomCallBack }) => {
  const { user } = useSelector((state: AppState) => state.auth || {});
  const { destination } = useSelector((state: AppState) => state.global || {});

  const [question, setQuestion] = useState<QuestionProps | undefined>();
  const [usersAnswer, setUsersAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (user && user.questions && user?.questions?.length > 0) {
      const randomQuestionIndex = Math.floor(Math.random() * user?.questions?.length);
      console.log({ randomQuestionIndex, questions: user.questions, length: user.questions.length });
      setQuestion(user.questions[randomQuestionIndex]);
    }
  }, [user]);

  const handleSubmit = () => {
    setLoading(true);

    if (hasCustomCallBack && callBack) {
      return callBack();
    }

    if (usersAnswer !== question?.answer) {
      crypToast(NotificationTypes.ERROR, "Incorrect Answer..Try again");
      setLoading(false);
      return;
    }

    crypToast(NotificationTypes.SUCCESS, "Correct Answer...");
    router.push(destination);
  };

  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] h-[23rem] tablet:h-[38.188rem] mx-[1.875rem] px-[1.125rem] tablet:px-16 bg-white text-black">
      <Dialog.Title as="h4" className="pt-[1.625rem] tablet:pt-[4.313rem] text-14 tablet:text-18 font-medium mb-[0.875rem]">
        Prove Your Identity
      </Dialog.Title>
      <hr className="mb-[1.75rem] tablet:mb-[4.063rem]" />
      <h5 className="font-medium mb-[1.75rem] text-12 tablet:text-base tablet:mb-16">Answer your Security Question below</h5>
      <div className="">
        <div className="relative">
          <CustomLabel className="mb-4 text-12 tablet:text-base" id="question" title={question?.question} />
          <CustomInput
            className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[0.75rem] tablet:mb-[1.875rem]"
            container="px-6"
            id="question"
            inputClassName="placeholder:text-xs border-black"
            name="text"
            onChange={(e: any) => setUsersAnswer && setUsersAnswer(e.target.value)}
            placeholder="Enter Security Answer "
            type="text"
            value={usersAnswer}
          />
          <CustomLink customClass="absolute right-0 text-12 tablet:text-base text-crypGreen-800" destination="/auth/forgot-security-question">
            Forgot Security Question?
          </CustomLink>
        </div>
        <div className="bg-citiBlue-200 text-center mt-[3.688rem] tablet:mt-24 flex justify-center items-center">
          <CustomButton
            handleClick={() => handleSubmit()}
            isDisabled={loading}
            isSubmitting={loading}
            size={ButtonProperties.SIZES.big}
            title="CONTINUE"
            type="submit"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ProveYourIdentity;

ProveYourIdentity.defaultProps = {
  callBack: () => {},
  hasCustomCallBack: false,
};
