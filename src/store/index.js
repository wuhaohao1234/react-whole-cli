import { configureStore } from "@reduxjs/toolkit"
import counterStore from "./counter/index";

export default configureStore({
	reducer: {
		counter: counterStore.reducer,
	},
});