/* eslint-disable react/display-name */
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import Icon from "@components/atoms/Icons";

import { LocalStorageKeys } from "@shared/libs/helpers";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const [checkPassed, setCheckPassed] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      // Get Token and Token Expiration Time
      const token = localStorage.getItem(LocalStorageKeys.TOKEN);
      const tokenExpirationTime = localStorage.getItem(LocalStorageKeys.EXPIRATION_TIME);

      // if no token was found or the token has expired ,then we redirect to "/auth/sign-in" page.
      if (token && moment() > moment(tokenExpirationTime)) {
        setCheckPassed(false);
        setLoading(false);
        router.replace("/auth/sign-in");
        return;
      }
      if (!token) {
        setCheckPassed(false);
        setLoading(false);
        router.replace("/auth/sign-in");
        return;
      }

      setLoading(false);
    }, []);

    if (loading)
      return (
        <div className="w-screen h-screen flex items-center justify-center animate-pulse">
          <Icon className="w-[5.125rem] h-[2.75rem]" name="logo" />
        </div>
      );

    if (checkPassed && !loading) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
