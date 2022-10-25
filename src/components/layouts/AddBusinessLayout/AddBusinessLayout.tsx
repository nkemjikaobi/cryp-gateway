import React from "react";

import UploadDocuments from "@components/organisms/SignUpPage/UploadDocuments/UploadDocuments";

interface AddBusinessLayoutProps {
  isRegistered: boolean;
}

const AddBusinessLayout: React.FC<AddBusinessLayoutProps> = ({ isRegistered }) => {
  return (
    <div className="w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto rounded-[3.125rem] px-4 smallLaptop:px-6 mt-[4rem] smallLaptop:mt-[6.5rem] mb-32 text-12 smallLaptop:text-16">
      <h2 className="text-20 font-medium mb-[2.313rem]">Business Details</h2>
      <h4 className="text-18  mb-[1.688rem]">Help us know you better, to serve you better</h4>
      <UploadDocuments isRegistered={isRegistered} />
    </div>
  );
};

export default AddBusinessLayout;
