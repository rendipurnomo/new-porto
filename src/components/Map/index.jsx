import { MapContainer,TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
export default function Map() {
  return (
    <MapContainer
      center={[-7.5454312, 110.873346, 18]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[200px] md:h-[400px] w-full border-primary border-4 md:border-8 rounded order-1 md:order-2">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-7.5454312, 110.873346, 18]}>
        <Popup>
          I'm live here <br /> visit me let's have coffee together.
        </Popup>
      </Marker>
    </MapContainer>
  );
}