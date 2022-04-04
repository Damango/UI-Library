import React, { useState, useRef } from "react";
import "./MenuPopUpButton.css";
const MenuPopUpButton = (props) => {
	const [subMenu, setSubMenu] = useState(false);

	const subMenuRef = useRef(null);

	if (props.subMenu) {
		return (
			<div className="menu-pop-up-button-container has-sub-menu">
				<div className="sub-menu-bridge"></div>
				<div
					className="menu-pop-up-button-text-wrapper"
					onClick={() => {
						props.onClick();
					}}
				>
					<div className="menu-pop-up-button-icon">{props.icon}</div>
					<div className="menu-pop-up-button-text">{props.text}</div>
					<div className="sub-menu-arrow">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
							<path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
						</svg>
					</div>
				</div>

				<div className="sub-menu-container" ref={subMenuRef}>
					{props.subMenu.map((button) => (
						<div className="sub-menu-button">{button}</div>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className="menu-pop-up-button-container">
				<div
					className="menu-pop-up-button-text-wrapper"
					onClick={() => {
						props.onClick();
					}}
				>
					<div className="menu-pop-up-button-icon">{props.icon}</div>
					<div className="menu-pop-up-button-text">{props.text}</div>
				</div>
			</div>
		);
	}
};

export default MenuPopUpButton;
