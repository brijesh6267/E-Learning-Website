import "../App.css";

function Links(props) {
	return (
		<div className="Links">
			<a href={props.lnk} target="_blank">
				{props.content}
			</a>
		</div>
	);
}
export default Links;
