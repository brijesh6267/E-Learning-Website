import "../App.css";
import Standard from "./Standard";
import Footer from "./Footer";
function Navbar(props) {
	return (
		<div className="Nav">
			<Standard name="Home" val="0" fun={props.fun}></Standard>
			<Standard name="8th" val="1" fun={props.fun}></Standard>
			<Standard name="9th" val="2" fun={props.fun}></Standard>
			<Standard name="10th" val="3" fun={props.fun}></Standard>
			<Standard name="11th" val="4" fun={props.fun}></Standard>
			<Standard name="12th" val="5" fun={props.fun}></Standard>
			<Footer></Footer>
		</div>
	);
}
export default Navbar;
