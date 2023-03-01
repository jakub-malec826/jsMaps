import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L as any).Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconUrl: markerIcon,
	iconRetinaUrl: markerIcon2x,
	shadowUrl: markerShadow,
});

import "../styles/MapPage.css";
import MatchRoute from "../API/MatchRoute";
import Control from "react-leaflet-custom-control";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { RootType } from "../store/Store";

export default function MapPage() {
	const totalDistance = useSelector(
		(state: RootType) => state.routeDataReducer.totalDistance
	);
	const position = useSelector(
		(state: RootType) => state.positionReducer.position
	);

	const [price, setPrice] = useState<number>(1);
	let sum = price * totalDistance * 1.1;

		return (
			<div className="map">
				<Button variant="text" color="primary">
					<Link to="/jsMaps">Back</Link>
				</Button>
				<MapContainer
					center={[51.505, -0.09]}
					zoom={13}
					scrollWheelZoom={false}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<MatchRoute position={position} />
					<Control position="bottomleft">
						<div className="distance">
							<TextField
								id="price"
								label="price for km"
								type="number"
								variant="standard"
								value={price}
								onChange={(e) =>
									setPrice(Number(e.target.value))
								}
							/>
						</div>
					</Control>
					<Control position="bottomleft">
						<ul className="distance">
							<li>Distance: {totalDistance.toFixed(1)} km</li>
							<li>Travel cost: {sum.toFixed(2)} zł </li>
						</ul>
					</Control>
				</MapContainer>
			</div>
		);
}
