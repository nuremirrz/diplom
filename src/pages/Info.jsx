import React from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
  const { year, district } = useParams();
  
  return (
    <div>
      <h2>Информация для {year} года в районе {district}</h2>
      {/* Здесь добавьте ваш контент на основе данных */}
    </div>
  );
};

export default Info;
