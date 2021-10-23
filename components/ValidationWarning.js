export default function ValidationWarning(props) {
	return (
		<aside
			className={
				"validation-warning" + (!props.condition ? " invisible" : "")
			}
		>
			{props.message ? props.message : "OK"}
		</aside>
	)
}
