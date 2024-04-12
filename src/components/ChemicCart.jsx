import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const ChemicCart = ({ isButtonClicked, selectedYear, selectedOption, additionalParams }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isButtonClicked) {
      const fetchData = async () => {
        try {
          let postData = {
            year: selectedYear,
            table_field: selectedOption
          };
  
          if (additionalParams) {
            postData = { ...postData, ...additionalParams };
            console.log(postData);
          }
  
          const response = await fetch('http://80.72.180.130:8581/api/report/get/report', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const responseData = await response.json();
          setResponse(responseData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }
  }, [isButtonClicked, selectedYear, selectedOption, additionalParams]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!response) {
    return <p>No data available</p>;
  }

  const { items, control_points } = response.data;

  const chartSeries = [
    {
      name: 'Контрольные точки',
      data: control_points
    }
  ];

  const chartOptions = {
    chart: {
      id: 'line-chart',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: items,
      title: {
        text: 'Items',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Контрольные точки',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }
      }
    }
  };

  return (
    <div>
      <h2>Содержимое </h2>
      <div className="chem_container">
        <Chart type='line' width={1200} height={550} series={chartSeries} options={chartOptions} />
      </div>      
    </div>
  );
};

export default ChemicCart;
