import React from "react";

import ConvertTokens from "@components/organisms/DashboardPage/ConvertTokens/ConvertTokens";

interface ConvertTokensPageProps {
  coin: string | null;
}

const ConvertTokensPage: React.FC<ConvertTokensPageProps> = ({ coin }) => {
  return (
    <>
      <hr className="hidden smallLaptop:block my-2 television:hidden" />
      <ConvertTokens coin={coin} />
    </>
  );
};

export default ConvertTokensPage;
