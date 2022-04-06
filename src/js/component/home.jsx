import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [taskArray, setTaskArray] = useState([]);

	let removeLi = setTaskArray.filter((task) => {
		return "";
	});

	let mappedTaskArray = taskArray.map((task) => {
		return (
			<li className="list-group-item d-flex justify-content-between">
				{task}
				<button type="button" class="btn btn-outline-light">
					Light
				</button>
			</li>
		);
	});

	return (
		<div className="container">
			<div className="mainBox">
				<div className="inputDiv">
					<input
						className="form-control"
						id="newTask"
						value={inputValue}
						onChange={(e) => {
							setInputValue(e.target.value);
						}}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								setTaskArray([...taskArray, inputValue]);
								setInputValue("");
							}
						}}
						placeholder="blank"
					/>
					<ul className="list-group">{mappedTaskArray}</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
