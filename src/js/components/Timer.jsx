import React from "react";

const Timer = (props) => {
	return (
		<div className="text-center ">
			<div className="boxes clock"><i className="fas fa-clock"/></div>
			<div className="boxes first">{props.string.charAt(0)}</div>
			<div className="boxes second">{props.string.charAt(1)}</div>
			<div className="boxes third">{props.string.charAt(2)}</div>
			<div className="boxes fourth">{props.string.charAt(3)}</div>
			<div className="boxes fiveth">{props.string.charAt(4)}</div>
			<div className="boxes sixth">{props.string.charAt(5)}</div>
		</div>
	);
};

export default Timer;
