import { ApolloCache, DefaultContext, MutationFunctionOptions, OperationVariables, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "src/store/auth";
import { setRedirectDestination, setShowSecurityQuestion } from "src/store/global";

import { crypToast } from "@components/atoms/CrypToast/CrypToast";

import { LOGIN_USER } from "@graphql/auth/mutations";

import { getTokenExpirationTime, getUrlQuery, handleGraphQLErrors, LocalStorageKeys, NotificationTypes } from "@shared/libs/helpers";

type loginProps = MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined;

interface useLoginMutationProps {
  login: (options?: loginProps) => void;
  isLoading: boolean;
}

const useLoginMutation = (): useLoginMutationProps => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLoginSuccessDestination = "/dashboard/payments";

  const router = useRouter();
  const dispatch = useDispatch();

  const [loginMutation, { data, error, client }] = useMutation(LOGIN_USER);

  const { loginUser }: { loginUser: any } = data || {};

  const login = (value: loginProps) => {
    setIsLoading(true);
    loginMutation(value);
  };

  useEffect(() => {
    if (loginUser && loginUser.user) {
      crypToast(NotificationTypes.SUCCESS, "Login successful");
      client.resetStore();
      const query = router.query;
      const { rdr } = query;

      delete query.rdr;

      const loginDestination = `${rdr}${getUrlQuery(query)}`;

      localStorage.setItem(LocalStorageKeys.TOKEN, loginUser.meta.mobile.token);
      localStorage.setItem(LocalStorageKeys.EXPIRATION_TIME, String(getTokenExpirationTime()));

      dispatch(setCurrentUser(loginUser.user));
      // router.push(rdr ? loginDestination : onLoginSuccessDestination);
      rdr ? dispatch(setRedirectDestination(loginDestination)) : dispatch(setRedirectDestination(onLoginSuccessDestination));
      setIsLoading(false);
      loginUser.user.questions !== null ? dispatch(setShowSecurityQuestion(true)) : router.push(rdr ? loginDestination : onLoginSuccessDestination);
    }

    if (error) {
      setIsLoading(false);
      handleGraphQLErrors(error);
    }
  }, [data, error]);

  return { login, isLoading };
};

export default useLoginMutation;
