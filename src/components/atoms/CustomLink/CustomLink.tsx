import Link from "next/link";
import React, { ReactNode } from "react";

export interface CustomLinkProps {
  destination: string;
  children: ReactNode;
  customClass?: string;
  hover?: string;
  redirect?: boolean;
}

const CustomLink = ({ children, redirect, hover, destination, customClass }: CustomLinkProps) => {
  return (
    <Link href={destination} target={redirect ? "_blank" : "_self"}>
      <div className={`cursor-pointer hover:text-${hover} ${customClass}`}>{children}</div>
    </Link>
  );
};

export default CustomLink;

CustomLink.defaultProps = {
  customClass: "",
  hover: "crypGreen-500",
  redirect: false,
};
