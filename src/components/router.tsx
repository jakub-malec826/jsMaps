import { createBrowserRouter } from "react-router-dom";
import MapPage from "../pages/MapPage";
import SearchPage from "../pages/SearchPage";

export default createBrowserRouter([
	{
		path: "/",
		element: <SearchPage />,
	},
	{
		path: "map/",
		element: <MapPage />,
	},
]);
