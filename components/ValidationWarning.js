export default function ValidationWarning(props) {
	return (
		<span
			className={
				"validation-warning" + (!props.condition ? " invisible" : "")
			}
		>
			{props.message ? props.message : "OK"}
		</span>
	)
}
