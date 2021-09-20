import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Render from "./render";
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Render/>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
