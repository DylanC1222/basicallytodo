import React from "react";
import { useNavigate } from "react-router-dom";

const Error = (props) => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>An error has occurred</h1>
			<button onClick={() => navigate("/")}>Return to home page</button>
		</div>
	);
};

export default Error;
