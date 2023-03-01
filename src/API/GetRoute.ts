import { Position } from "./GetLocation";

export default async function GetRoute(
	placeA: Position,
	placeB: Position,
	price: number = 1
) {
	//import.meta.env.VITE_HERE_API_KEY
    //
	console.log(placeA, placeB);
	return await fetch(
		`https://api.tomtom.com/routing/1/calculateRoute/${placeA.lat},${placeA.lng}/${placeB.lat},${placeB.lng}/json?maxAlternatives=0&computeBestOrder=false&travelMode=car&maxRoutes=1&avoid=unpavedRoads&avoid=carpools&avoid=tolls&avoid=ferries&key=0jFNkZPwVnImXtKGpAdF9S42K4PhdZnv&maxDistance=800&routeRepresentation=summaryOnly&avoidMotorways=false&vehicleWeight=0&vehicleAxleWeight=0&vehicleLength=0&vehicleWidth=0&vehicleHeight=0&vehicleCommercial=false&hilliness=0&steepness=0&trailDifficulty=0&maneuverPenalty=1&trafficPenalty=1&vehicleEngineType=combustion&fuelPrice=1&fuelConsumption=8&auxiliaryConsumption=0&idleFuelConsumption=0&accelerationEfficiency=0.33&decelerationEfficiency=0.33&turningEfficiency=0.33&uphillEfficiency=0.33&downhillEfficiency=0.33&constantSpeedConsumptionInLitersPerHundredkm=5.0&constantSpeedConsumptionInkWhPerHundredkm=19.0&routeType=fastest
`
	)
		.then((res) => {
			if (!res.ok) throw new Error(res.statusText);
			return res.json();
		})
		.then((data) => console.log(data));
}
