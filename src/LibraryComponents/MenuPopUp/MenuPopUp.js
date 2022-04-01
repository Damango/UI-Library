import React, { useState, useRef } from "react";
import "./MenuPopUp.css";
const MenuPopUp = (props) => {
	const [popUpOpen, setPopUpOpen] = useState(false);
	const menuRef = useRef(null);
	const menuContainerRef = useRef(null);
	const svgRef = useRef(null);

	window.addEventListener("mouseup", function (e) {
		if (popUpOpen) {
			if (e.target != svgRef.current) {
				togglePopUp2();
			}
		}
	});

	function togglePopUp2() {
		if (popUpOpen) {
			menuRef.current.style.opacity = 0;
			setPopUpOpen(false);
			setTimeout(() => {
				menuRef.current.style.display = "none";
			}, 300);
		} else {
			menuRef.current.style.display = "inline-block";
			setPopUpOpen(true);
			setTimeout(() => {
				menuRef.current.style.opacity = 1;
			}, 1);
		}
	}

	return (
		<div className="menu-pop-up-container" ref={menuContainerRef}>
			<span>
				<span
					className="svg-overlay"
					onClick={togglePopUp2}
					ref={svgRef}
				></span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" />
				</svg>
			</span>

			<div className="menu-pop-up-wrapper-closed" ref={menuRef}>
				<div className="pop-up-selection">Edit</div>
				<div className="pop-up-selection">Share</div>
				<div className="pop-up-selection">About</div>
				<div className="pop-up-selection">Delete</div>
			</div>
		</div>
	);
};

export default MenuPopUp;
