import React from "react";

import GalleryItem from "../GalleryItem/GalleryItem";

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      imgUrl: "/images/dashboard/nft/gallery/gallery1.png",
      name: "Beta Clone #77867",
      price: "25000",
      isScannable: true,
    },
    {
      id: 2,
      imgUrl: "/images/dashboard/nft/gallery/gallery2.png",
      name: "Beta Clone #77867",
      price: "45000",
      isScannable: false,
    },
    {
      id: 3,
      imgUrl: "/images/dashboard/nft/gallery/gallery3.png",
      name: "Beta Clone #77867",
      price: "30000",
      isScannable: true,
    },
    {
      id: 4,
      imgUrl: "/images/dashboard/nft/gallery/gallery1.png",
      name: "Beta Clone #77867",
      price: "25000",
      isScannable: true,
    },
    {
      id: 5,
      imgUrl: "/images/dashboard/nft/gallery/gallery2.png",
      name: "Beta Clone #77867",
      price: "45000",
      isScannable: false,
    },
    {
      id: 6,
      imgUrl: "/images/dashboard/nft/gallery/gallery3.png",
      name: "Beta Clone #77867",
      price: "30000",
      isScannable: true,
    },
    {
      id: 7,
      imgUrl: "/images/dashboard/nft/gallery/gallery1.png",
      name: "Beta Clone #77867",
      price: "25000",
      isScannable: true,
    },
    {
      id: 8,
      imgUrl: "/images/dashboard/nft/gallery/gallery2.png",
      name: "Beta Clone #77867",
      price: "45000",
      isScannable: true,
    },
    {
      id: 9,
      imgUrl: "/images/dashboard/nft/gallery/gallery3.png",
      name: "Beta Clone #77867",
      price: "30000",
      isScannable: false,
    },
    {
      id: 10,
      imgUrl: "/images/dashboard/nft/gallery/gallery1.png",
      name: "Beta Clone #77867",
      price: "25000",
      isScannable: false,
    },
    {
      id: 11,
      imgUrl: "/images/dashboard/nft/gallery/gallery2.png",
      name: "Beta Clone #77867",
      price: "45000",
      isScannable: true,
    },
    {
      id: 12,
      imgUrl: "/images/dashboard/nft/gallery/gallery3.png",
      name: "Beta Clone #77867",
      price: "30000",
      isScannable: false,
    },
  ];

  return (
    <div className="grid grid-cols-2 smallLaptop:grid-cols-3 gap-[1.813rem] mt-[5.063rem] w-[62.125rem] mx-auto">
      {galleryData.map((data) => (
        <GalleryItem gallery={data} key={data.id} />
      ))}
    </div>
  );
};

export default Gallery;
