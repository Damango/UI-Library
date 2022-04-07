import "./App.css";
import UILibrary from "./UILibrary";
import { useState } from "react";
function App() {
	const [viewState, setViewState] = useState("homepage");

	function openNewTab() {
		window.open("https://github.com/Damango/UI-Library");
	}
	function renderPages() {
		if (viewState === "library") {
			return <UILibrary />;
		} else {
			return (
				<div className="home-page-container">
					<div className="jumbotron-container">
						<div className="logo-container">
							<svg
								id="logo-35"
								viewBox="0 0 50 39"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{" "}
								<path
									d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
									class="ccompli1"
									fill="#007AFF"
								></path>{" "}
								<path
									d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
									class="ccustom"
									fill="#312ECB"
								></path>{" "}
							</svg>
						</div>
						<div className="jumbotron-text-container">
							<span>A React UI Components Library</span>
							<div className="jumbotron-buttons-container">
								<button
									className="jumbotron-button"
									onClick={() => {
										setViewState("library");
									}}
								>
									Documentation
								</button>
								<button className="jumbotron-button" onClick={openNewTab}>
									Github
								</button>
							</div>
						</div>
					</div>
					<div className="home-page-footer">
						<div className="footer-text-container">
							Made By: <a href="http://google.com">Justin Kessler</a>
						</div>
					</div>
				</div>
			);
		}
	}
	return <div className="App">{renderPages()}</div>;
}

export default App;
