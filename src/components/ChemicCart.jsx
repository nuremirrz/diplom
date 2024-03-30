import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const ChemicCart = ({ chemicalData }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (chemicalData) {
          const response = await axios.post('http://80.72.180.130:8581/api/report/get/report', {
            year: chemicalData.year,
            table_field: chemicalData.table_field
          });
          const { data } = response.data;
          // Используйте полученные данные для построения графика
          const options = {
            chart: {
              type: 'bar'
            },
            series: [{
              name: 'Уровень',
              data: data.items
            }],
            xaxis: {
              categories: data.control_points
            }
          };
          setChartData(options);
        }
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchData();
  }, [chemicalData]);

  return (
    <div>
      <h2>График</h2>
      <div>
        <Chart options={chartData} series={chartData.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default ChemicCart;
