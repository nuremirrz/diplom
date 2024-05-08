import React, { useState, useEffect } from 'react';
import "../App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { Icon } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import { apiEndpoints, baseURL } from '../services/apiConfig';

const MainMap = ({ onMarkerClick }) => {
    const [markersData, setMarkersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `${baseURL}${apiEndpoints.controlPoints}`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }

                const result = await response.json();
                // console.log(result.data);

                const transformedData = result.data.map(item => ({
                    id: item.id,
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

    const handleMarkerClick = (id) => {
        onMarkerClick(id);
        console.log('Marker clicked', id)
    };

    // create custom icon
    const customIcon = new Icon({
        iconUrl: require("../img/place.png"),
        iconSize: [25, 25]
    });

    // custom cluster icon
    // const createClusterCustomIcon = function (cluster) {
    //     return new divIcon({
    //         html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    //         className: "custom-marker-cluster",
    //         iconSize: point(22, 22, true)
    //     });
    // };

    return (
        <div className="map__container" style={{ margin: "30px" }}>
            <MapContainer center={[42.44898219069362, 77.12837773897982]} zoom={9.2}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createClusterCustomIcon}
                > */}
                    {markersData.map((marker, index) => {
                        if (marker.geocode[0] === null || marker.geocode[1] === null) {
                            // Пропускаем маркер, если хотя бы одна из координат равна null
                            return null;
                        }

                        return (
                            <Marker
                                key={index}
                                position={marker.geocode}
                                icon={customIcon}
                                eventHandlers={{
                                    mouseover: () => handleMarkerClick(marker.id)
                                }}
                            >
                                <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                                    {marker.popUp}
                                </Tooltip>
                            </Marker>
                        );
                    })}

                {/* </MarkerClusterGroup> */}
            </MapContainer>
        </div>
    );
};

export default MainMap;
