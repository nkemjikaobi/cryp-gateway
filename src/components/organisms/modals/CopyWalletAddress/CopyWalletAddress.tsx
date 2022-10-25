import { Dialog } from "@headlessui/react";
import React from "react";

import EnsureYouAreReceiving from "@components/organisms/DashboardPage/EnsureYouAreReceiving/EnsureYouAreReceiving";

const CopyWalletAddress = () => {
  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] mx-[1.875rem] px-[1.125rem] tablet:px-16 bg-white text-black">
      <Dialog.Title as="h3" className="text-16  text-center tablet:text-20 font-medium pt-[3.063rem] smallLaptop:pt-[4.313rem]">
        Wallet Address
      </Dialog.Title>
      <EnsureYouAreReceiving />
    </div>
  );
};

export default CopyWalletAddress;
