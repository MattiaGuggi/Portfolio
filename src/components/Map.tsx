import { MapContainer, TileLayer, Marker } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const position: LatLngExpression = [45.87, 9.12];

    return (
        <div className="w-full max-w-5xl mx-auto h-[500px] border border-indigo-200 rounded-xl overflow-hidden shadow-lg">
            <MapContainer
                center={position}
                zoom={10}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}></Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
