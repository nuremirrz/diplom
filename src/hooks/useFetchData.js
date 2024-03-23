// Вспомогательный хук для выполнения POST запроса
import { useState, useEffect } from 'react';

const useFetchData = (url, requestData) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });
                const responseData = await response.json();
                setData(responseData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url, requestData]);

    return data;
};

export default useFetchData;
