import * as yup from "yup";
import yupPassword from "yup-password";

import { errorMessages } from "@shared/libs/helpers";

yupPassword(yup); // extend yup

export const JoinWaitListSchema = yup.object().shape({
  name: yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  email: yup.string().email(errorMessages.email).required(errorMessages.required),
  country: yup.string().max(50, "Too Long!"),
});
