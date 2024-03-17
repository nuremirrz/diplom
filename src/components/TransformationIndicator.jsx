import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { baseURL } from '../services/apiConfig'; 

const TransformationIndicator = ({selectedYear, selectedDistrict}) => {
  const [indicatorData, setIndicatorData] = useState(null);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/transformation/indicator/${selectedYear}/${selectedDistrict}`);
        const data = await response.json();

        // Обновление состояния компонента с полученными данными
        setIndicatorData(data.data);
      } catch (error) {
        console.error('Ошибка при получении данных из API:', error);
        // Обработка ошибок при неудачном запросе
      }
    };

    // Вызов функции для загрузки данных при монтировании компонента
    fetchData();
  }, [selectedYear, selectedDistrict]); // Пустой массив зависимостей означает, что эффект выполнится только при монтировании компонента

  // Отображение данных в вашем компоненте
  return (
    <>
      <h2>Transformation Indicator Data</h2>
      {indicatorData ? (
        <LineChart data={indicatorData} selectedYear={selectedYear} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

const LineChart = ({ data, selectedYear }) => {
  // Деструктуризация данных для передачи их в график
  const { distances, area } = data;

  
  
  const chartData = {
    series: [
      {
        name: 'Area',
        data: area,
      }
    ],
    options: {
      title: { text: `Changes in ${selectedYear}` },
      colors: ['#2E93fA'],
      xaxis: {
        title: { text: 'Distance (m)' },
        categories: distances,
      },
      yaxis: {
        title: { text: 'Area (m²)' },
      },
    },
  };

  return <Chart type='line' width={1200} height={550} series={chartData.series} options={chartData.options} />;
};

export default TransformationIndicator;
