import "./App.css";
import UILibrary from "./UILibrary";
import HomePage from "../src/components/HomePage/HomePage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	const [viewState, setViewState] = useState("homepage");

	function openNewTab() {
		window.open("https://github.com/Damango/UI-Library");
	}
	function renderPages() {
		if (viewState === "library") {
			return <UILibrary />;
		} else {
			return <HomePage setViewState={setViewState} />;
		}
	}
	return <div className="App">{renderPages()}</div>;
}

export default App;
