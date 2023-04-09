import "../App.css";
function Standard(props) {
	const clickHandler = () => {
		console.log(props.val);
		props.fun(props.val);
	};

	return (
		<div className="Std">
			<button onClick={clickHandler} className="Std-btn">
				{props.name}
			</button>
		</div>
	);
}
export default Standard;
