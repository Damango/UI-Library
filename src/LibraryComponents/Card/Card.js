import React from "react";
import "./Card.css";
const Card = (props) => {
	return (
		<div className="card-container">
			<div className="card-title-container">{props.title}</div>
			<div className="card-description-container">{props.description}</div>
			<div className="card-button">Click Me</div>
		</div>
	);
};

export default Card;
