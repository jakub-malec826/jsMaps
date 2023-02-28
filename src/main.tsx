import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./components/MainApp";

import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MainApp />
	</React.StrictMode>
);
