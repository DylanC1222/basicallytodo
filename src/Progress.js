import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
	let data = useSelector((state) => state.todo.list);

	let count = 0;
	data.map((item, idx) => {
		if (item.completed) {
			count++;
		}
		return item;
	});

	return (
		<ProgressBar>
			<Highlight
				width={
					count / data.length < 0.05 ? "4%" : (count / data.length) * 100 + "%"
				}
			/>
			<Dot />
		</ProgressBar>
	);
};

const ProgressBar = styled.div`
	background: #eee;
	width: 100%;
	height: 15px;
	display: flex;
	align-items: center;
	border-radius: 10px;
`;
const Highlight = styled.div`
	background: slateblue;
	transition: 1s;
	width: ${(props) => props.width};
	height: 15px;
	border-radius: 10px;
`;

const Dot = styled.div`
	width: 20px;
	height: 20px;
	background: #fff;
	border: 5px solid slateblue;
	border-radius: 40px;
	margin: 0px 0px 0px -20px;
`;

export default Progress;
