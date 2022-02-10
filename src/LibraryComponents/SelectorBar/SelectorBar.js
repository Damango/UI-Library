import React, { useState, useRef } from "react";
import "./SelectorBar.css";

import SelectorBarButton from "./SelectorBarButton/SelectorBarButton";

const SelectorBar = (props) => {
	const [selectedTab, setSelectedTab] = useState("science");

	let buttonList = ["Science", "Math", "Engineering", "Bussiness", "Chemistry"];

	const highlightRef = useRef(null);

	function handleSelection(elementRef, positionData) {
		let boxRef = highlightRef.current;
		boxRef.style.width = positionData.width + "px";
		console.log(boxRef.style.width);
		boxRef.style.left = elementRef.offsetLeft - 8 + "px";
		console.log(boxRef.style.padding);
	}

	return (
		<div className="selector-bar-container">
			<div className="selector-bar-highlight-box" ref={highlightRef}></div>

			{buttonList.map((button) => (
				<SelectorBarButton
					text={button}
					handleSelection={handleSelection}
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				/>
			))}
		</div>
	);
};

export default SelectorBar;
