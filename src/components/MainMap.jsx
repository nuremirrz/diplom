import React, { useState, useEffect } from 'react';
import "../App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const MainMap = () => {
    const [markersData, setMarkersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 'https://gist.githubusercontent.com/Bektemir2001/f585a281f0196b0b3854909ff6695ef8/raw/a4e0a11b525a2d58f6148f772b7953d8c480e257/control_points.json';
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }

                const result = await response.json();
                console.log(result.data);

                const transformedData = result.data.map(item => ({
            geocode: [
                parseFloat(item.X_coordinate) || 0,  
                parseFloat(item.Y_coordinate) || 0,  
            ],
            popUp: item.name,
            }));

setMarkersData(transformedData);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Загрузка данных...</p>;
    }

    if (error) {
        return <p>Произошла ошибка: {error}</p>;
    }

    // create custom icon
    const customIcon = new Icon({
        iconUrl: require("../img/placeholder.png"),
        iconSize: [38, 38]
    });

    // custom cluster icon
    const createClusterCustomIcon = function (cluster) {
        return new divIcon({
            html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
            className: "custom-marker-cluster",
            iconSize: point(33, 33, true)
        });
    };

    return (
        <div className="map__container">
            <MapContainer center={[42.44898219069362, 77.12837773897982]} zoom={9.2}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createClusterCustomIcon}
                >
                    {markersData.map((marker, index) => {
    if (marker.geocode[0] === null || marker.geocode[1] === null) {
        // Пропускаем маркер, если хотя бы одна из координат равна null
        return null;
    }

    return (
        <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
        </Marker>
    );
})}

                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
};

export default MainMap;
