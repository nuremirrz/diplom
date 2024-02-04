import React from 'react';
import "../App.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";


const MainMap = () => {
    const markers = [
        {
            geocode: [42.625388859296244, 77.0924797063717],
            popUp: "Чолпон-Ата"
        },
        {
            geocode: [42.57386248079941, 76.74297810067849],
            popUp: "Чок-Тал"
        },
        {
            geocode: [42.648111191205665, 77.19405119409508],
            popUp: "Бостери"
        },
    ];
    // create custom icon
    const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: require("../img/placeholder.png"),
    iconSize: [38, 38] // size of the icon
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
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}        
      </MarkerClusterGroup>

    </MapContainer>
    </div>
  )
}

export default MainMap