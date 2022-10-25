import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

const Sessions = () => {
  const handleClick = (videoUrl: string) => {
    window.open(videoUrl, "_blank");
  };
  return (
    <div className="">
      <div className="flex flex-col bigLaptop:flex-row items-center">
        {SessionsData.map((session) => (
          <div
            className={`bg-${session.imgUrl} bg-center bg-cover bg-no-repeat h-[17rem] tablet:h-[23.063rem] w-[17.813rem] tablet:w-[24.313rem] mb-[2.375rem] rounded-[0.75rem] mx-[2.813rem] smallLaptop:mr-[1.938rem] relative cursor-pointer`}
            key={session.id}
            onClick={() => handleClick(session.videoUrl)}
          >
            <div className="h-[4.875rem] tablet:h-[8.75rem] bg-glass-100 pl-[0.813rem] absolute bottom-0 text-white left-0 rounded-b-[0.75rem] rounded-bl-[0.75rem]  backdrop-blur-[6.25rem] w-full flex flex-col justify-center">
              <h3 className="uppercase text-12 font-medium tablet:text-20 tablet:font-medium  mb-[22px]">{session.title}</h3>
              <CustomButton customClass="capitalize" handleClick={() => {}} isGhost={true} title="Watch Live Replay" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sessions;

const SessionsData = [
  {
    id: 1,
    imgUrl: "learn1",
    title: "how blockchain can benefit content creators",
    videoUrl: "https://www.linkedin.com/video/event/urn:li:ugcPost:6967564072028377088/",
  },
  {
    id: 2,
    imgUrl: "learn2",
    title: "NFT for content creators",
    videoUrl: "https://www.linkedin.com/video/event/urn:li:ugcPost:6970416710403141632/",
  },
];
