import { useField } from "formik";
import React, { useState } from "react";

import ErrorMessage from "@components/atoms/ErrorMessage";
import Icon from "@components/atoms/Icons";

const FormikCustomInput = ({ className, container, type, iconClass, disabled, icon, inputClassName, ...props }: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [field, meta] = useField<{}>(props);

  return (
    <>
      <div className={` ${className} flex items-center h-[57.14px] w-full ${meta.touched && meta.error ? "!border !border-b-[#A0000B] !border-x-0 !border-t-0" : ""} `}>
        <div className={`flex px-5 bg-white text-black items-center justify-start  h-full w-full rounded-[5px] border-crypGray-100 ${container}`}>
          {icon && <Icon className={iconClass} name={icon} />}
          <input
            className={`${inputClassName} border-none focus:!border-none focus:ring-0 autofill:shadow-reset-bg autofill:hover:shadow-reset-bg autofill:focus:shadow-reset-bg autofill:active:shadow-reset-bg h-full w-full py-0 `}
            disabled={disabled}
            tabIndex={0}
            type={type === "password" && showPassword ? "text" : type}
            {...field}
            {...props}
          />
          {type === "password" && showPassword ? (
            <Icon className="cursor-pointer" name="eyeSlash" onClick={handleShowPassword} />
          ) : (
            type === "password" && !showPassword && <Icon className="cursor-pointer" name="eye" onClick={handleShowPassword} />
          )}
        </div>
      </div>
      {meta.touched && meta.error && <ErrorMessage error={meta.error} />}
      {/* {type === "password" && meta.error && <ErrorMessage error={meta.error} />} */}
    </>
  );
};

export default FormikCustomInput;

FormikCustomInput.defaultProps = {
  className: "",
  disabled: false,
  icon: "",
  inputClassName: "",
  iconClass: "",
  container: "",
};
