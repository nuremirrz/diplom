import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Tsi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://80.72.180.130:8581/api/tsi/2022/1');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const series = Object.keys(data.elements).map(key => ({
    name: key,
    data: data.elements[key].map(value => parseFloat(value.toFixed(2))) // Ограничиваем количество знаков после запятой до двух
  }));

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    title: {
      text: 'Page Statistics',
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: data.control_points,
    },
    tooltip: {
      y: series.map((_, index) => ({
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }))
    },
    grid: {
      borderColor: '#f1f1f1',
    }
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
};

export default Tsi;