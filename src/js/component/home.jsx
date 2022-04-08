import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [taskArray, setTaskArray] = useState([]);

	let mappedTaskArray = taskArray.map((task, index) => {
		return (
			<li
				className="list-group-item d-flex justify-content-between"
				key={index}>
				{task}
				<button
					type="button"
					className="btn btn-outline-light"
					onClick={() => removeTask(index)}>
					<strong>X</strong>
				</button>
			</li>
		);
	});

	function removeTask(i) {
		let filteredArray = taskArray.filter((task, index) => {
			return i != index;
		});
		setTaskArray(filteredArray);
	}

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
