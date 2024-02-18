import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const ChartExample = () => {
  const [apiData, setApiData] = useState({
    distances: [],
    area: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.231.158:8787/api/transformation/indicator/1/2024");
        const data = await response.json();
        setApiData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { distances, area } = apiData;

  const lineChartData = {
    labels: distances.map((value, index) => `${value} m`),
    datasets: [
      {
        data: distances,
        label: "Distances",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5,
      },
      {
        data: area,
        label: "Area (m2)",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5,
      },
    ],
  };

  return (
    <Line
      type="line"
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: "Your Chart Title",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "top",
        },
      }}
      data={lineChartData}
    />
  );
};

export default ChartExample;
