import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

import "./App.css";
function App() {
	const [initial, changeInitial] = useState("0");
	const clickHandler = (value) => {
		changeInitial(value);
	};
	return (
		<div className="App">
			<header className="Header">
				<Navbar fun={clickHandler}></Navbar>
				<Main val={initial}></Main>
			</header>
		</div>
	);
}

export default App;
