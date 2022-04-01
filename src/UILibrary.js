import React, { useState, useRef } from "react";
import ComponentLink from "./components/ComponentLink/ComponentLink";
import "./UILibrary.css";

// Import for the Links to the Components
import ComponentData from "./componentData/componentData";

// Imports for UI Components
import DropDownMenu from "./LibraryComponents/DropDownMenu/DropDownMenu";
import NavBar from "./LibraryComponents/NavBar/NavBar";
import DateSelector from "./LibraryComponents/DateSelector/DateSelector";

const UILibrary = (props) => {
	let selectedUnderlineStyle = {
		width: "100%",
		height: "3px",
		zIndex: 2,
	};

	let selectedButtonStyle = {
		backgroundColor: "white",
	};

	let componentLinks = ComponentData;

	const mobileNavBarRef = useRef(null);

	const codeExampleRef = useRef(null);

	const [componentView, setComponentView] = useState(componentLinks[0]);

	const [fullCompView, setFullCompView] = useState("inline-block");

	const [componentInfoPage, setComponentInfoPage] = useState("properties");

	const [mobileNavBar, setMobileNavBar] = useState(false);

	function renderInfoPage() {
		if (componentInfoPage === "usage") {
			return (
				<div className="component-usage-container">
					{componentView.usage.map((component, index) => (
						<div className="component-usage-info-container">
							<div className="components-usage-description-container">
								{stringParser(component.description).map((word) => (
									<span className={word.type + "-text"}>{word.text} </span>
								))}
							</div>
							<div className="components-usage-example-container">
								{component.example}
							</div>
						</div>
					))}
				</div>
			);
		} else if (componentInfoPage === "properties") {
			return (
				<div className="component-properties-container">
					{componentView.properties.map((property) => (
						<div className="component-property-container">
							<div className="component-property-name-container">
								<div className="component-property-name">{property.name}</div>
							</div>
							<div className="component-property-details-container">
								<div className="property-type-default">
									Default - {property.default} |{" "}
									<span className="prop-type">{property.type}</span>
								</div>
								<div className="property-description">
									{property.description}
								</div>
							</div>
						</div>
					))}
				</div>
			);
		} else if (componentInfoPage === "preview") {
			return (
				<div className="mobile-component-preview-container">
					{componentView.component}
				</div>
			);
		}
	}

	function stringParser(string) {
		let wordsContainer = [];
		let i;
		let wordsList = string.split(" ");

		for (i = 0; i < wordsList.length; i++) {
			if (wordsList[i].includes("--")) {
				let keyword = wordsList[i];
				keyword = keyword.slice(2, keyword.length);
				console.log(keyword);
				wordsContainer.push({ text: keyword, type: "keyword" });
			} else {
				wordsContainer.push({ text: wordsList[i], type: "plain" });
			}
		}

		return wordsContainer;
	}

	function handleExampleCode() {}

	function handleMobileNavBar() {
		let mobileNavBarElement = mobileNavBarRef.current;

		console.log(mobileNavBarElement);

		if (mobileNavBar) {
			mobileNavBarElement.style.left = "-100%";
			setMobileNavBar(false);
		} else {
			mobileNavBarElement.style.left = "0%";
			setMobileNavBar(true);
		}
	}

	return (
		<div className="ui-library-app-container">
			<div className="mobile-top-bar-container">
				<div
					className="mobile-nav-bar-button"
					onClick={() => {
						handleMobileNavBar();
					}}
				>
					<i class="fas fa-bars"></i>
				</div>
				<div className="github-button">
					<i class="fab fa-github"></i>
				</div>
			</div>

			<div className="mobile-component-nav-bar-container" ref={mobileNavBarRef}>
				<div
					className="mobile-nav-bar-overlay"
					onClick={() => {
						handleMobileNavBar();
					}}
				></div>
				<div className="mobile-nav-bar-wrapper">
					<div className="component-nav-bar-logo">Phidom </div>
					<div className="component-nav-bar-content-wrapper">
						<div className="component-nav-bar-links-container">
							{componentLinks.map((link) => (
								<ComponentLink
									data={link}
									setComponentView={setComponentView}
									componentView={componentView}
									handleMobileNavBar={handleMobileNavBar}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="component-nav-bar-container">
				<div className="component-nav-bar-logo">Phidom </div>
				<div className="component-nav-bar-content-wrapper">
					<div className="component-nav-bar-links-container">
						{componentLinks.map((link) => (
							<ComponentLink
								data={link}
								setComponentView={setComponentView}
								componentView={componentView}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="main-view-container">
				<div
					className="component-information-container"
					style={{ display: fullCompView }}
				>
					<div className="component-title-container">{componentView.title}</div>
					<div className="component-description-container">
						A small description for the user to describe the basic function of
						the Component.
					</div>

					<div className="component-nav-buttons-container">
						<div
							className="component-nav-button"
							onClick={() => {
								setComponentInfoPage("usage");
							}}
							style={componentInfoPage === "usage" ? selectedButtonStyle : {}}
						>
							Usage
							<span
								className="nav-button-underline"
								style={
									componentInfoPage === "usage" ? selectedUnderlineStyle : {}
								}
							></span>
						</div>
						<div
							className="component-nav-button properties-button"
							onClick={() => {
								setComponentInfoPage("properties");
							}}
							style={
								componentInfoPage === "properties" ? selectedButtonStyle : {}
							}
						>
							Properties
							<span
								className="nav-button-underline"
								style={
									componentInfoPage === "properties"
										? selectedUnderlineStyle
										: {}
								}
							></span>
						</div>

						<div
							className="component-nav-button mobile-preview-button preview-button"
							onClick={() => {
								setComponentInfoPage("preview");
							}}
							style={componentInfoPage === "preview" ? selectedButtonStyle : {}}
						>
							Preview
							<span
								className="nav-button-underline"
								style={
									componentInfoPage === "preview" ? selectedUnderlineStyle : {}
								}
							></span>
						</div>
					</div>

					<div className="component-data-wrapper">
						<div className="component-data-header">
							{componentInfoPage.toUpperCase()}
						</div>
						{renderInfoPage()}
					</div>
				</div>

				<div className="component-preview-container">
					{componentView.component}
				</div>
			</div>
		</div>
	);
};

export default UILibrary;
