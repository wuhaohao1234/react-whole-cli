import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";

import counterStore from "../../store/counter/index";

const { increment, decrement, incrementByAmount } = counterStore.actions;

export function Home() {
	const dispatch = useDispatch();
	const count = useSelector(state => state.counter.value);
	return (
		<div>
			<h2>Home</h2>
			<div>
				<h3>{count}</h3>
				<Button onClick={() => {
					dispatch(increment());
				}} type="primary" >点击 +1</Button>
				<Button onClick={() => {
					dispatch(decrement());
				}} type="primary" >点击 -1</Button>
				<Button onClick={() => {
					dispatch(incrementByAmount(15));
				}} type="primary" >设置为 15</Button>
			</div>
		</div>
	);
}
