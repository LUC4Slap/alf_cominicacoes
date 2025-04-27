/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useState } from 'react';

// Corrige o problema dos ícones no Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const Map = ({
  latitude,
  longitude,
  zoom = 15,
}: MapProps) => {
  const [width, setWidth] = useState(0);
   useEffect(() => {
     if (typeof window !== 'undefined') {
       setWidth(window.innerWidth);
     }
   }, []);
    return width != 0 || width != undefined ? (
      <div style={{ height: '400px', width: '100%' }}>
        <MapContainer
          center={[latitude, longitude]}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%', borderRadius: '12px' }}>
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>Estamos aqui! 📍</Popup>
          </Marker>
        </MapContainer>
      </div>
    ) : null;
};

export default Map;
