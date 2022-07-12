import React from "react";
import styled from "styled-components";
import { Eco } from "@material-ui/icons";

const Spinner = (props) => {
	return (
		<Outer>
			<Eco style={{ color: "slateblue", fontSize: "200px" }} />
		</Outer>
	);
};

const Outer = styled.div`
	background: aliceblue;
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default Spinner;
