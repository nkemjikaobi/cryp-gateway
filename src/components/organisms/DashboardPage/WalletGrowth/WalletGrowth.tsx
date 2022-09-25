import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, Filler } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

const WalletGrowth = () => {
  ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Filler);

  const data = {
    labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "WED", "THU", "FRI"],
    datasets: [
      {
        label: "CRYP TOKENS",
        data: [0.1, 0.4, 0.2, 0.3, 0.4, 0.3, 0.3, 0.3, 0.4, 0.3, 0.4, 0.8],
        fill: true,
        backgroundColor: "rgba(174, 212, 240, 0.2)",
        borderColor: "rgba(174, 212, 240, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    // plugins: { legend: { display: false } },
    layout: { padding: 20 },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="growth bg-white rounded-[1.25rem]">
      <Line data={data} options={options} />
    </div>
  );
};

export default WalletGrowth;
