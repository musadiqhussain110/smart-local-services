import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function OSMMap({ center = [24.8607, 67.0011], zoom = 13 }) {
  return (
    <div className="glass rounded-xl p-2">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom className="h-64 w-full rounded-lg">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>ServicesHub booking location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
