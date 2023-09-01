"use client";

import leaflet from "leaflet";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import MarkerShadow from "leaflet/dist/images/marker-shadow.png";
import React from "react";

// @ts-ignore
delete leaflet.Icon.Default.prototype._getIconUrl;
leaflet.Icon.Default.mergeOptions({
  iconUrl: MarkerIcon.src,
  iconRetinaUrl: MarkerIcon2x.src,
  shadowUrl: MarkerShadow.src,
});

interface MapProps {
  center?: number[];
}

function ChangeView({ center }: { center: any }) {
  if (center) {
    const map = useMap();
    map?.setView(center, 4);
  }

  return null;
}

const Map: React.FC<MapProps> = (props) => {
  return (
    <MapContainer
      center={(props.center as leaflet.LatLngExpression) || [51, -0.09]}
      zoom={props.center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <ChangeView center={props.center} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.center && (
        <Marker position={props.center as leaflet.LatLngExpression} />
      )}
    </MapContainer>
  );
};

export default Map;
