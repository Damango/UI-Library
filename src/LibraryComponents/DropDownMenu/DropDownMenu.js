import React, { useState, useEffect } from "react";
import "./DropDownMenu.css";

const DropDownMenu = (props) => {
	const [dropDownState, setDropDownState] = useState(false);
	const [dropDownOptions, setDropDownOptions] = useState(props.dropDownOptions);
	const [currentSelection, setCurrentSelection] = useState(
		props.dropDownOptions[0]
	);

	window.addEventListener("mouseup", function (e) {
		if (e.target.className != "drop-down-menu-option") {
			setDropDownState(false);
		}
	});

	useEffect(() => {
		let options = [...dropDownOptions];
		options.splice(0, 1);
		setDropDownOptions(options);
	}, []);

	function handleDropDown() {
		if (dropDownState === true) {
			setDropDownState(false);
		} else {
			setDropDownState(true);
		}
	}

	function renderDropDown() {
		if (dropDownState) {
			return { display: "block" };
		} else {
			return { display: "none" };
		}
	}

	function updateDropDownList(index) {
		let previousSelection = currentSelection;
		let options = [...dropDownOptions];
		setCurrentSelection(options[index]);
		options.splice(index, 1);
		options.push(previousSelection);
		options.sort();
		setDropDownOptions(options);
		setDropDownState(false);
	}

	function selectOption(index, option) {
		updateDropDownList(index);
		props.setState(option);
	}

	return (
		<div className="phi-drop-down-menu-container">
			<div className="drop-down-menu-wrapper" onClick={handleDropDown}>
				{currentSelection} <i class="fas fa-angle-down"></i>
			</div>
			<div
				className="drop-down-menu-options-container"
				style={renderDropDown()}
			>
				{dropDownOptions.map((option, index) => (
					<div
						className="drop-down-menu-option"
						onClick={() => {
							selectOption(index, option);
						}}
					>
						{option}
					</div>
				))}
			</div>
		</div>
	);
};

DropDownMenu.defaultProps = {
	dropDownOptions: ["Option 1", "Option 2", "Option 3", "Option 4"],
};

export default DropDownMenu;
