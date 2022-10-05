import React, { useState } from "react";

import InvoiceForm from "../InvoiceForm/InvoiceForm";
import InvoiceGenerated from "../InvoiceGenerated/InvoiceGenerated";

const Invoice = () => {
  const [isLinkGenerated, setIsLinkGenerated] = useState<boolean>(false);
  return <>{isLinkGenerated ? <InvoiceGenerated /> : <InvoiceForm setIsLinkGenerated={setIsLinkGenerated} />}</>;
};

export default Invoice;
