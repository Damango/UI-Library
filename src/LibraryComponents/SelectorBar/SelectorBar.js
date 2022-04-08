import React, { useState, useRef, useEffect } from "react";
import "./SelectorBar.css";

import SelectorBarButton from "./SelectorBarButton/SelectorBarButton";

const SelectorBar = (props) => {
	let buttonList = props.options;
	const [highlightBoxPos, setHighlightBoxPos] = useState({
		left: 0 + "px",
		width: 0 + "px",
	});
	const highlightRef = useRef(null);

	const [selectedTab, setSelectedTab] = useState(buttonList[0]);

	function handleSelection(elementRef, positionData) {
		let boxRef = highlightRef.current;
		boxRef.style.width = positionData.width + "px";
		console.log(boxRef.style.width);
		boxRef.style.left = elementRef.offsetLeft - 8 + "px";
		console.log(boxRef.style.padding);
	}

	return (
		<div className="selector-bar-container">
			<div
				className="selector-bar-highlight-box"
				ref={highlightRef}
				style={highlightBoxPos}
			></div>

			{buttonList.map((button, index) => (
				<SelectorBarButton
					text={button.text}
					onClick={button.onClick}
					button={button}
					handleSelection={handleSelection}
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
					index={index}
					setHighlightBoxPos={setHighlightBoxPos}
				/>
			))}
		</div>
	);
};

export default SelectorBar;
