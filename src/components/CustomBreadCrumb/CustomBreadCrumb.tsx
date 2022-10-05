import { useRouter } from "next/router";
import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import { getSanitizedHtml } from "@shared/libs/helpers";

import { BreadCrumbProps } from "./BreadCrumbProps";

interface CustomBreadCrumbProps {
  breadCrumbs?: Array<BreadCrumbProps>;
}
const CustomBreadCrumb: FC<CustomBreadCrumbProps> = ({ breadCrumbs }) => {
  const router: any = useRouter();
  return (
    <>
      <div className="hidden smallLaptop:flex items-center text-16 font-semibold pt-[2.063rem] pl-[6.813rem]">
        {breadCrumbs &&
          Object.entries(breadCrumbs).map(([index, breadCrumb]) => {
            if (parseInt(index) === Object.entries(breadCrumbs).length - 1) {
              return <div className="uppercase" dangerouslySetInnerHTML={getSanitizedHtml(breadCrumb.text ? breadCrumb.text : "")} key={uuidv4()} />;
            }
            return (
              <div className="mr-2 flex items-center" key={uuidv4()}>
                <div className="mr-4 uppercase">
                  <CustomLink destination={breadCrumb.url ? breadCrumb.url : "#"}>{breadCrumb.text ? breadCrumb.text : ""}</CustomLink>
                </div>
                <Icon className="mr-4" name="caretRight" />
              </div>
            );
          })}
      </div>
      <div className="flex items-center text-16 font-semibold pt-[3.938rem] pl-[1.813rem] smallLaptop:hidden">
        <Icon className="cursor-pointer mr-[2.063rem]" name="caretLeft" onClick={() => router.back()} />
        <h5 className="uppercase text-14">{breadCrumbs && breadCrumbs[breadCrumbs.length - 1].text}</h5>
      </div>
    </>
  );
};
export default CustomBreadCrumb;

CustomBreadCrumb.defaultProps = {
  breadCrumbs: [],
};
