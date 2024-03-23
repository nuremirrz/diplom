import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const CalculateChart = ({ selectedYear, selectedDistrict }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://80.72.180.130:8581/api/calculate/horizontal/buffer/zone', {
                    "cost": 18448000,
                    "district": selectedDistrict,
                    "year": selectedYear.toString()
                });
                setChartData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedYear, selectedDistrict]);

    if (!chartData) {
        return <p>Loading...</p>;
    }

    const { distances, items } = chartData;

    const formattedItems = items.map(item => parseFloat(item));

    const chartSeries = [
        {
            name: 'Items',
            data: formattedItems
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
            categories: distances,
            title: {
                text: 'Distance (m)',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: 'Arial, sans-serif'
                }
            }
        },
        yaxis: {
            title: {
                text: 'Item',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: 'Arial, sans-serif'
                }
            }
        }
    };

    return (
        <Chart type='line' width={1200} height={550} series={chartSeries} options={chartOptions} />
    );
};

export default CalculateChart;
