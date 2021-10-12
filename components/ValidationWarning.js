export default function ValidationWarning(props) {
	return (
		<div className={"validation-warning" + (!props.condition ? " invisible" : "")} >{props.message ? props.message : "SPACER"}</div>
	);
}