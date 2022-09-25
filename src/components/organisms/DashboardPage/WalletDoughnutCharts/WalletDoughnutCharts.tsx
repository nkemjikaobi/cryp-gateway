import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const WalletDoughnutCharts = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["cpUSD 0.00 (Income)", "cpUSD 0.00 (Withdrawals)"],
    datasets: [
      {
        label: "Income / Withdrawals Expenditure",
        data: [60, 30],
        backgroundColor: ["rgba(212, 228, 247, 1)", "rgba(232, 220, 248, 1)"],
      },
    ],
  };

  const options: any = {
    // plugins: {
    //   legend: {
    //     position: "right",
    //     rtl: true,
    //     labels: {
    //       usePointStyle: true,
    //       pointStyle: "circle",
    //       padding: 20,
    //     },
    //   },
    // },
    plugins: { legend: { display: true, position: "bottom" } },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default WalletDoughnutCharts;
