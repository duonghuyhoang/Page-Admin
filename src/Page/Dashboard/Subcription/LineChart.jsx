import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./Subcription.css";
import {
  Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(LinearScale);
Chart.register(CategoryScale);
Chart.register(PointElement);
Chart.register(LineElement);

const data = {
  labels: [
    "Ngày 1",
    "Ngày 2",
    "Ngày 3",
    "Ngày 4",
    "Ngày 5",
    "Ngày 6",
    "Ngày 7",
  ],
  datasets: [
    {
      label: "Số lượng người đăng ký",
      data: [12, 19, 3, 5, 2, 3, 10],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='line-chart'>
      <h3 className='title-line-chart'>
        Số lượng người đăng ký trong 7 ngày gần nhất
      </h3>
      <Line
        data={data}
        options={options}
        ref={(chart) => {
          chartRef.current = chart;
        }}
      />
    </div>
  );
}

export default LineChart;
