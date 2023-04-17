import "../App.css";
import Home from "./Home";
import _8th from "./8th";
import _9th from "./9th";
import _10th from "./10th";
import _11th from "./11th";
import _12th from "./12th";
function Main(props) {
	let temp = <Home></Home>;
	if (props.val === "0") {
		temp = <Home></Home>;
	} else if (props.val === "1") {
		temp = <_8th></_8th>;
	} else if (props.val === "2") {
		temp = <_9th></_9th>;
	} else if (props.val === "3") {
		temp = <_10th></_10th>;
	} else if (props.val === "4") {
		temp = <_11th></_11th>;
	} else {
		temp = <_12th></_12th>;
	}
	return (
		<div className="Main">
			{/* <div className="waterMark"></div> */}
			{temp}
		</div>
	);
}
export default Main;
