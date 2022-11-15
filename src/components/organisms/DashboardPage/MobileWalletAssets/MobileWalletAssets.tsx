import React from "react";

import SingleMobileWalletAsset from "../SingleMobileWalletAsset/SingleMobileWalletAsset";

interface MobileWalletAssetsProps {
  assetsData: any;
  setSingleReceive: Function;
}

const MobileWalletAssets: React.FC<MobileWalletAssetsProps> = ({ assetsData, setSingleReceive }) => {
  return (
    <div>
      {assetsData.map((asset: any) => (
        <SingleMobileWalletAsset asset={asset} key={asset.id} setSingleReceive={setSingleReceive} />
      ))}
    </div>
  );
};

export default MobileWalletAssets;
