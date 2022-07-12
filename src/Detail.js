import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "./redux/todo";
import Button from "@material-ui/core/Button";

const Detail = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const index = params.index;
	const data = useSelector((state) => state.todo.list);
	return (
		<div>
			<h1 onClick={() => navigate("/")}>{data[index].text}</h1>
			<Button
				variant="outlined"
				color="primary"
				onClick={async () => {
					console.log(index, data[index].id, data[index].completed);
					dispatch(
						updateTask({
							index: index,
							id: data[index].id,
							completed: data[index].completed,
						})
					);
					navigate("/");
				}}>
				Swap completion
			</Button>
			<Button
				variant="outlined"
				color="secondary"
				onClick={async () => {
					dispatch(deleteTask({ index: index, id: data[index].id }));
					navigate("/");
				}}>
				Delete task
			</Button>
		</div>
	);
};

export default Detail;
