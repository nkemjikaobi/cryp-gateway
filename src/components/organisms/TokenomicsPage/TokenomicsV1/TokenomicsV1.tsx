import React from "react";

import Icon from "@components/atoms/Icons";

const TokenomicsV1 = () => {
  return (
    <div className="text-black text-base font-medium px-[1.25rem] pb-[5.625rem] pt-[5.625rem] tablet:pt-[6.25rem] tablet:pb-[3.125rem] tablet:px-[4.375rem] smallLaptop:px-[6.25rem] smallLaptop:pt-[7.5rem]  bigLaptop:px-[11.25rem] bigLaptop:pt-[11.25rem] bigLaptop:pb-[7.188rem]">
      <h2 className="text-20 tablet:text-37 font-bold text-center mb-8 tablet:mb-20 tablet:mt-8">Cryp Version 1.0</h2>
      <div className="w-[90%]">
        <p className="font-bold mb-8">The Cryp ecosystem would be made up of 3 class of tokens, namely:</p>
        <ul>
          {EcoSystemData.map((eco) => (
            <li className="mb-8" key={eco.id}>
              <Icon className="mr-4 inline" name="ellipse" />
              <span>
                <span className="font-bold mr-2">{eco.title}</span>
                <span className="text-14 font-normal">{eco.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[90%]">
        <h2 className="font-bold mb-4 mt-8">Tokenomics of Cryp$ (CPUSD)</h2>
        <p className="text-14 font-normal mb-6 smallLaptop:ml-12">
          <span className="font-bold mr-2 text-base">Cryp$ (CPUSD):</span> A proxy stable coin to BUSD CPUSD is created when dollars are deposited in the CRYP collections escrow
          account (either via merchant settlements/remittance or by direct purchase) and in cases of non-settlement cpUSD purchases,. BUSD is purchased to collaterize the issued
          cpUSD, thereby creating an equivalent supply of cpUSD that is introduced in circulation.
        </p>
        <p className="font-bold mb-4">Total Supply: Unlimited (no hard cap)</p>
        <p className="font-bold mb-4">Inflationary/Deflationary: Inflationary</p>
        <p className="font-bold mb-4">Price: 1 USD (BUSD)</p>
        <p className="font-bold mb-4">Collateral: All issued cpUSD is 100% collateralized by equivalent BUSD at every time.</p>
      </div>
      <div className="w-[90%]">
        <h2 className="font-bold mb-6 mt-8">Utility:</h2>
        <ul>
          {UtilityData.map((eco) => (
            <li className="mb-8" key={eco.id}>
              <Icon className="mr-4 inline" name="ellipse" />
              <span>{eco.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[90%]">
        <h2 className="font-bold mb-6 mt-8">Risk Management:</h2>
        <ul>
          {RiskManagementData.map((eco) => (
            <li className="mb-8" key={eco.id}>
              <Icon className="mr-4 inline" name="ellipse" />
              <span>{eco.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TokenomicsV1;

const EcoSystemData = [
  {
    id: 1,
    title: "Cryp$(CPUSD):",
    text: "This is a stable coin proxy of the Binance USD stable coin(busd) and would also extend to being a proxy to a stablecoin native to any blockchain the cryp solution is deployed to.Merchants will receive their settlements in cpUSD.",
  },
  {
    id: 2,
    title: "UCryp:",
    text: "This is the utility token of the Cryp ecosystem and serves asthe means to purchase Governance NFTs and other membership only NFTs (e.g., Cryp Business Club), for staking and staking rewards, payments on other products in the Cryp ecosystem.",
  },
  {
    id: 3,
    title: "Local Stablecoin Tokens:",
    text: "This refers to stablecoins of several countries where the Cryp project is existing in and pegged to the respective local currencies. These tokens will be used to access localized value-added services such as bills payments, and loyalty rewards.",
  },
];

const RiskManagementData = [
  {
    id: 1,
    text: "cpUSD is only released with exact equivalent value of liquidity from merchant settlement or direct purchase of with BUSD/Fait/Other support digital currencies.",
  },
  {
    id: 2,
    text: " cpUSD is burnt when merchants convert their cUSD for BUSD or Ucryp or for Fiat.",
  },
  {
    id: 3,
    text: "All liquidity received from cpUSD purchase must be put locked in an escrow so as not to lose its dollar peg.",
  },
  {
    id: 4,
    text: "The Cryp project must have long term Liquidity Providers to support cpUSD claims from stakers when staking becomes available. ",
  },
];

const UtilityData = [
  {
    id: 1,
    text: "Merchants have their settlements converted to cpUSD. cpUSD is then converted to BUSD on demand (swap application) or to Ucryp or Fiat.",
  },
  {
    id: 2,
    text: "cpUSD can be staked. (APY to be determined and disclosed when staking becomes available)",
  },
  {
    id: 3,
    text: "Payment of transaction fees during trade (token exchange to other supported digital currencies)",
  },
];
