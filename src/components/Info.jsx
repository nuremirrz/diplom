import React, { useEffect, useState } from 'react';
import TransformationIndicator from './TransformationIndicator';
import { baseURL } from '../services/apiConfig';

const Info = ({selectedYear, selectedDistrict}) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Используем значения selectedYear и selectedDistrict для формирования URL запроса
        const response = await fetch(`${baseURL}/transformation/indicator/${selectedYear}/${selectedDistrict}`);
        const data = await response.json();
        setApiData(data.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

  
    fetchData();
  }, [selectedYear, selectedDistrict]);
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <TransformationIndicator      
          selectedYear={selectedYear} 
          selectedDistrict={selectedDistrict} 
          lakeData={apiData} /> 
      </div>
    </>
  );
};

export default Info;
