import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const ChemicCart = ({ chemicalData, selectedYear }) => {
  // const [chartData, setChartData] = useState({});
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postData = {
      year: selectedYear,
      table_field: "pH"
      // "children": 6,
      // "related_field": "element_id"
    }

    const fetchData = async () => {
      try {
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
  }, [selectedYear]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!response) {
    return <p>No data available</p>;
  }


  const { items, control_points} = response.data;

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
      <h2>График</h2>
      <div className="chem_container">
        {/* <Chart options={chartData} series={chartData.series} type="bar" height={350} /> */}
        <Chart type='line' width={1200} height={550} series={chartSeries} options={chartOptions} />
      </div>
    </div>
  );
};

export default ChemicCart;
