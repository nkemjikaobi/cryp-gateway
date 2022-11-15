import React, { useMemo, useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import CustomSelect from "@components/atoms/CustomSelect/CustomSelect";
import CustomTable from "@components/atoms/CustomTable/CustomTable";
import Icon from "@components/atoms/Icons";
import CopyWalletAddress from "@components/organisms/modals/CopyWalletAddress/CopyWalletAddress";

import { ButtonProperties } from "@shared/libs/helpers";

import MobileWalletAssets from "../MobileWalletAssets/MobileWalletAssets";

const OtherTokensInstance = () => {
  const currencies = [
    { text: "NGN", value: "NGN" },
    { text: "USD", value: "USD" },
    { text: "EUR", value: "EUR" },
    { text: "YEN", value: "months" },
  ];

  const [currency, setCurrency] = useState(currencies[0].value);
  const [singleReceive, setSingleReceive] = useState(false);

  const assetsData = [
    {
      id: 1,
      logo: "bitcoin",
      symbol: "BTC",
      name: "Bitcoin",
      price: "NGN 309.2",
      change: "2.07%",
      type: "decrement",
      valueOwned: "NGN100,000.00",
      cryptoAmount: "0.00223068 BTC",
    },
    {
      id: 2,
      logo: "litecoin",
      symbol: "LTC",
      name: "Litecoin",
      price: "NGN 309.2",
      change: "2.07%",
      type: "decrement",
      valueOwned: "NGN100,000.00",
      cryptoAmount: "0.02021211 BTC",
    },
    {
      id: 3,
      logo: "ada",
      symbol: "ADA",
      name: "Cardano",
      price: "NGN 309.2",
      change: "6.07%",
      type: "increment",
      valueOwned: "NGN100,000.00",
      cryptoAmount: "0.497564899 BTC",
    },
    {
      id: 4,
      logo: "usdt",
      symbol: "USDT",
      name: "Tether",
      price: "NGN 309.2",
      change: "2.07%",
      type: "decrement",
      valueOwned: "NGN100,000.00",
      cryptoAmount: "0.009570031 BTC",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Currency Name",
            accessor: "name",
            Cell: ({
              row: {
                original: { logo, symbol, name },
              },
            }: any) => {
              return (
                <div className="flex items-center">
                  <div className="w-[4.5rem] h-16 relative">
                    <Icon name={logo} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-14 mb-1 whitespace-nowrap truncate">{symbol}</h4>
                    <h6 className="text-12 font-medium whitespace-nowrap truncate">{name}</h6>
                  </div>
                </div>
              );
            },
          },
          {
            Header: "Last Price",
            accessor: "price",
            Cell: (props: any) => {
              return <div className="text-14 font-semibold">{props?.value || "N/A"}</div>;
            },
          },
          {
            Header: "Crypto Amount",
            accessor: "cryptoAmount",
            Cell: (props: any) => {
              return <div className="text-14 font-semibold">{props?.value || "N/A"}</div>;
            },
          },
          {
            Header: "24hr Change",
            accessor: "change",
            Cell: (props: any) => {
              return (
                <p className={`${props.row.original.type === "increment" ? "text-crypGreen-800" : "text-crypRed-500"} text-14 font-semibold`}>
                  {props.row.original.type === "increment" ? "+" : "-"}
                  {props.value}
                </p>
              );
            },
          },
          {
            Header: "Value Owned",
            accessor: "valueOwned",
            Cell: (props: any) => {
              return <div className="text-14 font-semibold">{props?.value || "N/A"}</div>;
            },
          },
          {
            id: "actions",
            Header: "",
            Cell: (props: any) => {
              return (
                <div className="flex justify-center items-center">
                  <CustomButton
                    customClass="!px-[1.25rem] !text-14 !py-[0.688rem] !w-[5.25rem] !h-[2.75rem] mr-[1.75rem]"
                    handleClick={() => {}}
                    size={ButtonProperties.SIZES.small}
                    title="SEND"
                    variant={ButtonProperties.VARIANT.accent.name}
                  />
                  <CustomButton
                    customClass="!px-[1.25rem] !text-14 !py-[0.688rem] !w-[5.25rem] !h-[2.75rem]"
                    handleClick={() => setSingleReceive(true)}
                    size={ButtonProperties.SIZES.small}
                    title="RECEIVE"
                    variant={ButtonProperties.VARIANT.primary.name}
                  />
                </div>
              );
            },
          },
        ],
      },
    ],
    []
  );

  const finalAssetsData: any = useMemo(() => assetsData, [assetsData]);

  return (
    <>
      <div className="bg-white pt-6 smallLaptop:pt-[54px] pl-[0.938rem] smallLaptop:pl-[3.25rem] rounded-[2.5rem] pr-4 smallLaptop:pr-8 shadow-auth mt-[1.438rem] pb-[1.063rem]">
        <div className="flex items-center justify-between">
          <div className="flex smallLaptop:items-center flex-col smallLaptop:flex-row">
            <h3 className="text-14 smallLaptop:text-20 whitespace-nowrap font-semibold text-crypGreen-800 mr-[4.188rem]">Your Wallet Assets</h3>
            <CustomSelect
              className="rounded-md border !pl-0 font-semibold text-14 !text-crypGreen-800 h-[3.875rem]"
              onChange={(e) => setCurrency(e.target.value)}
              options={currencies}
              parentContainer="border-none my-4 w-[7.5rem]"
              placeholder="currency"
              value={currency}
            />
          </div>
          <div className="flex items-center">
            <Icon className="cursor-pointer" name="add" />
            <h5 className="uppercase ml-2 smallLaptop:ml-4 text-14 smallLaptop:text-18 whitespace-nowrap font-extrabold text-crypYellow-200 hover:cursor-pointer">add a coin</h5>
          </div>
        </div>
        <div className="hidden smallLaptop:block">
          <CustomTable columns={columns} data={finalAssetsData} />
        </div>
        <div className="block smallLaptop:hidden">
          <MobileWalletAssets assetsData={assetsData} setSingleReceive={setSingleReceive} />
        </div>
      </div>
      <CustomModal toggleVisibility={setSingleReceive} visibility={singleReceive}>
        <CopyWalletAddress />
      </CustomModal>
    </>
  );
};

export default OtherTokensInstance;
