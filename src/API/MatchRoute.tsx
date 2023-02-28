import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { Position } from "./GetLocation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";
import { addDistance, addTime } from "../store/features/routeDataSlice";

export default function MatchRoute({ position }: { position: Position[] }) {
	const map = useMap();

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (!map || !position.length) return;

		const routingControl = (L as any).Routing.control({
			waypoints: [
				L.latLng(position[0].lat, position[0].lng),
				L.latLng(position[1].lat, position[1].lng),
			],
			routeWhileDragging: false,
			show: false,
		}).addTo(map);

		routingControl.on("routesfound", function (e: any) {
			var routes = e.routes;
			var summary = routes[0].summary;
			dispatch(addDistance(summary.totalDistance));
			dispatch(addTime(summary.totalTime));
	
		});
		return () => {
			map.removeControl(routingControl);
		};
	}, [map, position]);

	return null;
}
