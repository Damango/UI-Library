import React from "react";
import "./ComponentLink.css";

const ComponentLink = (props) => {
	function renderSelectedContainer() {
		return props.data.title === props.componentView.title
			? {
					backgroundColor: "white",
					boxShadow: "0px 0px 1px 2px rgb(194, 194, 194)",
			  }
			: {};
	}

	function renderSelectedCircle() {
		return props.data.title === props.componentView.title
			? {
					width: "25px",
					borderRadius: "10px",
			  }
			: {};
	}

	return (
		<div
			className="component-link-container"
			style={renderSelectedContainer()}
			onClick={() => {
				props.setComponentView(props.data);
				props.handleMobileNavBar();
			}}
		>
			<div
				className="component-link-circle"
				style={renderSelectedCircle()}
			></div>
			<div className="component-link-text">{props.data.title}</div>
		</div>
	);
};

export default ComponentLink;
