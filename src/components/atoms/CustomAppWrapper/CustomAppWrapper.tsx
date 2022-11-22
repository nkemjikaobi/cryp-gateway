import { useQuery } from "@apollo/client";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "src/store/auth";

import { GET_USER } from "@graphql/auth/queries";

import { getUrlQuery, LocalStorageKeys } from "@shared/libs/helpers";

const CustomAppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loopCount, setLoopCount] = useState(0);
  const { data, error } = useQuery(GET_USER);

  const dispatch = useDispatch();
  const router = useRouter();

  const { pathname, query } = router;

  const authKeyPaths = ["dashboard"];
  const userIsInSecuredPath = authKeyPaths.find((path) => pathname.includes(path.replaceAll("/", "")));

  const logout = () => {
    const redirectPath = `${pathname}${getUrlQuery(query).replace("?", "&")}`;

    localStorage.removeItem(LocalStorageKeys.TOKEN);
    localStorage.removeItem(LocalStorageKeys.EXPIRATION_TIME);

    dispatch(setCurrentUser({}));

    if (userIsInSecuredPath) router.push(`/auth/sign-in?rdr=${redirectPath}`);
  };

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.TOKEN);
    const tokenExpirationTime = localStorage.getItem(LocalStorageKeys.EXPIRATION_TIME);

    if (token && moment() > moment(tokenExpirationTime)) logout();
    if (!token && userIsInSecuredPath) logout();

    setTimeout(() => {
      setLoopCount(loopCount + 1);
    }, 500);
  }, [loopCount]);

  useEffect(() => {
    if (data?.getCurrentUser) {
      dispatch(setCurrentUser(data?.getCurrentUser));
    } else if (error) logout();
  }, [data, error]);

  return <>{children}</>;
};

export default CustomAppWrapper;
