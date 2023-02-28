import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalDistance: <number>0,
	totalTime: <number>0,
};

const routeDataSlice = createSlice({
	name: "routeData",
	initialState,
	reducers: {
		addDistance: (state, action) => {
			state.totalDistance = action.payload /1000;
		},
		addTime: (state, action) => {
			state.totalTime = action.payload /1000;
		},
	},
});

export default routeDataSlice.reducer;
export const { addDistance, addTime } = routeDataSlice.actions;
