import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

import { CURRENCIES } from "@shared/libs/helpers";

interface GalleryItemProps {
  gallery: any;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ gallery }) => {
  return (
    <div className="w-[10.313rem] smallLaptop:w-[16.938rem] h-[14.375rem] smallLaptop:h-[22.313rem] rounded-[1.875rem] mb-[2.25rem] border-[0.019rem] border-crypGray-60 bg-crypBlack-100 relative cursor-pointer">
      <Image layout="fill" objectFit="cover" src={gallery.imgUrl} />
      <div className="absolute bottom-0 h-[6.5rem] smallLaptop:h-[6.813rem] backdrop-blur-[3.125rem] bg-glass-400 px-[0.563rem] smallLaptop:px-[0.875rem] w-full text-white smallLaptop:rounded-[1.875rem]">
        <h4 className="mt-[0.813rem] text-14 smallLaptop:text-16 font-bold">{gallery.name}</h4>
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-12 smallLaptop:text-14 font-medium opacity-70 mb-2">Selling Price</h5>
            <p className="text-12 smallLaptop:text-14 font-bold">
              {CURRENCIES.NAIRA}
              {Number(gallery.price).toLocaleString()}
            </p>
          </div>
          <Icon name="qrcode" />
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
