import React from "react";

interface InvoiceItemProps {
  invoice: any;
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice }) => {
  return (
    <div className="flex flex-col mb-[3.75rem] text-12 smallLaptop:text-14" key={invoice.id}>
      <div className="flex justify-between items-center">
        <h3>{invoice.name}</h3>
        <h5>{invoice.value}</h5>
      </div>
    </div>
  );
};

export default InvoiceItem;
