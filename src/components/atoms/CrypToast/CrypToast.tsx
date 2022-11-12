import { toast } from "react-hot-toast";

import { NotificationTypes } from "@shared/libs/helpers";

import Icon from "../Icons";

export const crypToast = (type: string, message: string) => {
  const appearance =
    type === NotificationTypes.SUCCESS
      ? "bg-crypGreen-500 border-crypBlue-400"
      : type === NotificationTypes.ERROR
      ? "bg-crypRed-100 border-crypRed-200"
      : "bg-crypBlue-300 border-crypBlue-400";

  const iconName = type === NotificationTypes.SUCCESS ? "goodHand" : type === NotificationTypes.ERROR ? "sadFace" : "goodHand";

  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } p-4 max-w-md w-full ${appearance} rounded-[0.625rem] pointer-events-auto flex justify-center items-center border w-[38rem] h-[4.625rem]`}
    >
      <Icon name={iconName} />
      <p className="text-14 font-semibold ml-4">{message}</p>
    </div>
  ));
};
