import Image from "next/image";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

import Icon from "@components/atoms/Icons";

import InvoiceMonkey from "@images/dashboard/invoice/invoiceMonkey.png";

import InvoiceItem from "../InvoiceItem/InvoiceItem";

const InvoiceGenerated = () => {
  return (
    <div className="bg-white w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto rounded-[3.125rem] shadow-auth px-4 smallLaptop:pl-[3.375rem] smallLaptop:pr-[3.938rem] mt-[6.5rem] mb-32">
      <Toaster position="top-center" />
      <div className="flex items-center justify-center">
        <Image alt="invoice image" height={136} src={InvoiceMonkey} width={243} />
      </div>
      <h3 className="uppercase text-center text-20 font-bold text-crypYellow-200 mt-[1.813rem] mb-[1.563rem]">invoice</h3>
      <h4 className="text-14 text-center font-semibold text-crypGreen-800 mb-[3.75rem] mt-[2.063rem]">Date: July 23rd, 2022</h4>
      <div>
        {InvoiceGeneratedData.map((invoice) => (
          <InvoiceItem invoice={invoice} key={invoice.id} />
        ))}
      </div>
      <CopyToClipboard
        onCopy={() => {
          toast.success("Invoice Link Copied");
        }}
        text="payformelink.webng.ng"
      >
        <div className="flex justify-center items-center pb-[5.125rem] cursor-pointer text-12 smallLaptop:text-14">
          <Icon className="mr-[2.063rem]" name="copy" />
          <span className="text-crypBlue-300 underline underline-offset-8">payformelink.webng.ng</span>
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default InvoiceGenerated;

const InvoiceGeneratedData = [
  {
    id: 1,
    name: "Name of Product/Service",
    value: "Hairstyle",
  },
  {
    id: 2,
    name: "Amount Due",
    value: "2,400",
  },
  {
    id: 3,
    name: "Total Price",
    value: "2,400",
  },
];
