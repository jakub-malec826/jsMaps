import { createSlice } from "@reduxjs/toolkit";
import { Position } from "../../API/GetLocation";

const initialState = {
	position: <Position[]>[],
};

const positionSlice = createSlice({
	name: "position",
	initialState,
	reducers: {
		addPosition: (state, action) => {
			state.position.push(action.payload);
		},
	},
});

export default positionSlice.reducer;
export const { addPosition } = positionSlice.actions;
