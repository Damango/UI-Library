import React, { useState, useRef } from "react";
import "./MenuPopUp.css";
const MenuPopUp = (props) => {
	const [popUpOpen, setPopUpOpen] = useState(false);
	const menuRef = useRef(null);
	const menuContainerRef = useRef(null);
	const svgRef = useRef(null);

	window.addEventListener("mouseup", function (e) {
		if (popUpOpen) {
			let subMenuButton = document.querySelector(".has-sub-menu");
			console.log(e.target.parentNode.className);
			//console.log("tasdasdasd");
			if (e.target != svgRef.current) {
				if (!e.target.className.includes("has-sub-menu")) {
					if (!e.target.parentNode.className.includes("has-sub-menu")) {
						togglePopUp();
					}
				}
			}
		}
	});

	function togglePopUp() {
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
				<span className="svg-overlay" onClick={togglePopUp} ref={svgRef}></span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" />
				</svg>
			</span>

			<div className="menu-pop-up-wrapper" ref={menuRef}>
				{props.children}
			</div>
		</div>
	);
};

export default MenuPopUp;
/* {props.options.map((option) => (
					<div className="pop-up-selection">{option}</div>
				))} */
