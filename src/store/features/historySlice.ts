import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	history: <{ placeA: string; placeB: string }[]>[],
};

const historySlice = createSlice({
	name: "historySlice",
	initialState,
	reducers: {
		addToHistory: (state, action) => {
			state.history.push(action.payload);
		},
	},
});

export default historySlice.reducer;
export const { addToHistory } = historySlice.actions;
