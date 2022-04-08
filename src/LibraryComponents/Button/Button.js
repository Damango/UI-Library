import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
	let className = styles.button;

	if (props.type === "disabled") {
		className += " " + styles.disabled;
	} else if (props.type === "blue") {
		className += " " + styles.blue;
	} else if (props.type === "danger") {
		className += " " + styles.danger;
	} else {
	}

	return (
		<button className={className} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
