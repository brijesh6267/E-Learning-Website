import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";
function App() {
	return (
		<div className="App">
			<header className="Header">
				<Navbar></Navbar>
				<Main></Main>
			</header>
			<footer>
				<Footer></Footer>
			</footer>
		</div>
	);
}

export default App;
