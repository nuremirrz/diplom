import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const CalculateChart = ({ selectedYear, selectedDistrict }) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const postData = {
            cost: 18448000,
            district: selectedDistrict,
            year: selectedYear.toString(),
        };

        const fetchData = async () => {
            try {
                const response = await fetch('http://80.72.180.130:8581/api/calculate/horizontal/buffer/zone', {
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
    }, [selectedYear, selectedDistrict]);
    
    if (loading) {
        return <p>Loading...</p>;
    }

    if (!response) {
        return <p>No data available</p>;
    }


    const { distances, items } = response.data;
    
    // const formattedItems = items.map(item => parseFloat(item));
    // const formattedItems = items;
    const formattedItems = Array.isArray(items) ? items.map(item => parseFloat(item)) : [];

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