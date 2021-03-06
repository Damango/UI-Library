import React, { useRef, useEffect } from "react";
import "./SelectorBarButton.css";

const SeletorBarButton = (props) => {
	const buttonRef = useRef(null);
	useEffect(() => {
		setTimeout(() => {
			if (props.index === 0) {
				let firstButton = document.querySelector(".selector-bar-button");
				props.setHighlightBoxPos({
					left: firstButton.offsetLeft - 8 + "px",
					width: firstButton.getBoundingClientRect().width + "px",
				});
			}
		}, 1);
	}, []);

	function renderSelectedStyle() {
		if (props.selectedTab.text.toLowerCase() === props.text.toLowerCase()) {
			return { color: "#0956fc" };
		} else {
			return { color: "#2c3e50" };
		}
	}

	return (
		<div
			className="selector-bar-button"
			ref={buttonRef}
			onClick={() => {
				props.handleSelection(
					buttonRef.current,
					buttonRef.current.getBoundingClientRect()
				);

				props.setSelectedTab(props.button);
				props.onClick();
			}}
			style={renderSelectedStyle()}
		>
			<div className="selector-bar-text">{props.text}</div>
		</div>
	);
};

export default SeletorBarButton;
