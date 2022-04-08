import React, { useRef } from "react";
import "./ToolTip.css";

const ToolTip = (props) => {
	const toolTipRef = useRef(null);
	function animateToolTip() {
		console.log(props.children.style);
	}

	return (
		<div className="tool-tip-container" onMouseEnter={animateToolTip}>
			<div className="tool-tip-pop-up-container" ref={toolTipRef}>
				{props.text}
			</div>
			{props.children}
		</div>
	);
};

export default ToolTip;
