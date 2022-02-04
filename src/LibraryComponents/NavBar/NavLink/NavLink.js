import React, { useState, useRef } from "react";
import "./NavLink.css";

const NavLink = (props) => {
	let subLinksContainerRef = useRef(null);

	const [dropDown, setDropDown] = useState(false);

	function handleDropDown() {
		if (dropDown) {
			setDropDown(false);
			subLinksContainerRef.current.style.height = "0px";

			setTimeout(() => {
				if (!dropDown) {
					subLinksContainerRef.current.style.display = "none";
				}
			}, 300);
		} else {
			subLinksContainerRef.current.style.display = "block";
			let containerTest = document.querySelector(
				".sub-link-container"
			).offsetHeight;
			setTimeout(() => {
				console.log(containerTest);
				subLinksContainerRef.current.style.height =
					containerTest * props.data.subLinks.length + "px";
			}, 0);
			setDropDown(true);
		}
	}

	function openLink(link) {
		window.open(link);
	}

	if (props.data.subLinks) {
		return (
			<div className="nav-link-container">
				<div className="nav-link-wrapper" onClick={handleDropDown}>
					{props.data.text} <i class="fas fa-angle-down"></i>
				</div>
				<div className="sub-links-container" ref={subLinksContainerRef}>
					{props.data.subLinks.map((subLink) => (
						<div
							className="sub-link-container"
							onClick={() => {
								openLink(subLink.link);
							}}
						>
							{subLink.text}
						</div>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className="nav-link-container">
				<div
					className="nav-link-wrapper"
					onClick={() => {
						openLink(props.data.link);
					}}
				>
					{props.data.text}
				</div>
			</div>
		);
	}
};

export default NavLink;
