import React from "react";
import BucketList from "./BucketList";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Error from "./Error";
import { addTask } from "./redux/todo";
import { useDispatch, useSelector } from "react-redux";
import Progress from "./Progress";
import Spinner from "./Spinner";
// import Button from "@material-ui/core/Button";

function App() {
	const text = React.useRef(null);

	const dispatch = useDispatch();
	const is_loaded = useSelector((state) => state.todo.is_loaded);

	const addBucketList = async () => {
		dispatch(addTask({ text: text.current.value }));
		text.current.value = "";
	};

	return (
		<div className="App">
			<Container>
				<Title>Todo list</Title>
				<Progress />
				<Line />
				<Routes>
					<Route path="/" element={<BucketList />} />
					<Route path="/detail/:index" element={<Detail />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Container>
			<Input>
				<input type="text" ref={text} />
				<button onClick={addBucketList}>Add</button>
			</Input>
			{!is_loaded && <Spinner />}
		</div>
	);
}

const Input = styled.div`
	max-width: 350px;
	min-height: 4vh;
	max-height: 8vh;
	background-color: #fff;
	padding: 16px;
	margin: 20px auto;
	border-radius: 5px;
	border: 1px solid #ddd;
	display: flex;

	& > * {
		padding: 5px;
	}

	& input {
		border: 1px solid #888;
		margin-right: 10px;
		width: 70%;
	}

	& input:focus {
		outline: none;
		border: 1px solid slateblue;
	}

	& button {
		width: 25%;
		color: #fff;
		border: slateblue;
		background-color: slateblue;
	}
`;

const Container = styled.div`
	max-width: 350px;
	min-height: 60vh;
	background-color: #fff;
	padding: 16px;
	margin: 20px auto;
	border-radius: 5px;
	border: 1px solid #ddd;
`;

const Title = styled.h1`
	color: slateblue;
	text-align: center;
`;

const Line = styled.hr`
	margin: 16px 0px;
	border: 1px dotted #ddd;
`;

export default App;
