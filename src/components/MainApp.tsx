import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "../store/Store";
import router from "./router";

export default function MainApp() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}
