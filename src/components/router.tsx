import { createBrowserRouter } from "react-router-dom";
import MapPage from "../pages/MapPage";
import SearchPage from "../pages/SearchPage";

export default createBrowserRouter([
	{
		path: "/jsMaps",
		element: <SearchPage />,
	},
	{
		path: "jsMaps/map/",
		element: <MapPage />,
	},
]);
