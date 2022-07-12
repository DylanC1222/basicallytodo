// 리액트 패키지를 불러옵니다.
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchTaskList } from "./redux/todo";

const BucketList = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loaded = useSelector((state) => state.todo.is_loaded);
	React.useEffect(() => {
		if (loaded === false) {
			dispatch(fetchTaskList());
		}
	}, [loaded, dispatch]);

	const data = useSelector((state) => state.todo.list);

	return (
		<ListStyle>
			{data.map((item, index) => {
				return (
					<ItemStyle
						completed={item.completed}
						className="list_item"
						key={index}
						onClick={() => navigate("/detail/" + index)}>
						{item.text}
					</ItemStyle>
				);
			})}
		</ListStyle>
	);
};

const ListStyle = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	max-height: 50vh;
	height: 50vh;
`;

const ItemStyle = styled.div`
	padding: 16px;
	margin: 8px;
	background-color: ${(props) => (props.completed ? "slateblue" : "aliceblue")};
	color: ${(props) => (props.completed ? "white" : "black")};
`;

export default BucketList;
