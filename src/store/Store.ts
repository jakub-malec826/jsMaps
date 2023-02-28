import { combineReducers, configureStore } from "@reduxjs/toolkit";
import historyReducer from "./features/historySlice";
import positionReducer from "./features/positionSlice";
import routeDataReducer from "./features/routeDataSlice";

const reducers = combineReducers({
	historyReducer,
	positionReducer,
	routeDataReducer,
});

const store = configureStore({
	reducer: reducers,
});

export default store;

export type RootType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
