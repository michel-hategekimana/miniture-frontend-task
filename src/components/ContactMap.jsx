import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
const customMarkerIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', 
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

export default function ContactMap() {
  const position = [43.6443, -79.4015]; 
  const googleMapsUrl = "https://www.google.com/maps/place/620+King+St+W,+Toronto,+ON+M5V+1M6,+Canada/@43.6443,-79.4015,17z";

  const handleMarkerClick = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full h-[500px] md:h-[600px] relative select-none px-9 md:px-12 py-6">
      
      <div className="w-full h-full grayscale contrast-[112%] brightness-[101%] relative">
        <MapContainer 
          center={position} 
          zoom={16} 
          scrollWheelZoom={false}
          dragging={false}         
          doubleClickZoom={false}  
          zoomControl={false}     
          className="w-full h-full z-0 cursor-grab active:cursor-grabbing" 
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <Marker 
            position={position} 
            icon={customMarkerIcon}
            eventHandlers={{
              click: handleMarkerClick, 
            }}
          >
            <Tooltip direction="top" offset={[0, -35]} opacity={1} permanent={false}>

            </Tooltip>
          </Marker>
        </MapContainer>
        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-1 left-2 backdrop-blur-md px-2 py-1 rounded-xl hover:scale-[1.03] active:scale-[0.98] transition-all group pointer-events-auto"
        >
          <div className="flex flex-col">
            <p className="text-[12px] font-black text-[#1C1C1C] tracking-tight uppercase group-hover:text-blue-600 transition-colors">
              Google
            </p>
          </div>
        </a>
      </div>
      
    </section>
  );
}