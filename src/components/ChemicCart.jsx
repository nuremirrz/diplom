import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const ChemicCart = ({ isButtonClicked, selectedYear, selectedOption, selectedSubOption }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isButtonClicked) {
      const fetchData = async () => {
        try {
          const postData = {
            year: selectedYear,
            table_field: selectedOption,
            ...(selectedSubOption && { children: selectedSubOption.id })
          };
      
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
  }, [isButtonClicked, selectedYear, selectedOption, selectedSubOption]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!response) {
    return <p>No data available</p>;
  }

  const { items, control_points } = response.data;

  const chartSeries = [
    {
      name: 'Items',
      data: items
    }
  ];

  const chartOptions = {
    chart: {
      id: 'bar-chart',
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: control_points,
      title: {
        text: 'Control Points',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Items',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false
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