import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "../styles/SearchPage.css";
import { useState } from "react";
import { GetLocation, Position } from "../API/GetLocation";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootType } from "../store/Store";
import { addToHistory } from "../store/features/historySlice";
import { addPosition } from "../store/features/positionSlice";

export default function SearchPage() {
	const history = useSelector(
		(state: RootType) => state.historyReducer.history
	);

	const dispatch = useDispatch<AppDispatch>();

	const nav = useNavigate();

	const [places, setPlaces] = useState<{ placeA: string; placeB: string }>({
		placeA: "",
		placeB: "",
	});

	const handleSearch = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(addToHistory(places));
		
		dispatch(addPosition(await GetLocation<Position>(places.placeA)));
		dispatch(addPosition(await GetLocation<Position>(places.placeB)));
		
		setPlaces({ placeA: "", placeB: "" });
		
		nav("map/");
	};

	return (
		<div className="SearchPage">
			<h1>jsMaps</h1>
			<form className="form" onSubmit={handleSearch}>
				<TextField
					id="placeA"
					label="Place A"
					variant="standard"
					value={places.placeA}
					onChange={(e) =>
						setPlaces((old) => ({
							placeA: e.target.value,
							placeB: old.placeB,
						}))
					}
					required
				/>
				<TextField
					id="placeB"
					label="Place B"
					variant="standard"
					value={places.placeB}
					onChange={(e) =>
						setPlaces((old) => ({
							placeA: old.placeA,
							placeB: e.target.value,
						}))
					}
					required
				/>
				<Button variant="text" id="search" type="submit">
					Search
				</Button>
			</form>
			{history.length !== 0 && (
				<div className="last_routes">
					<h3>Search history</h3>
					<ul>
						{history.map((p) => (
							<li key={history.indexOf(p)}>
								From: {p.placeA} to: {p.placeB}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
