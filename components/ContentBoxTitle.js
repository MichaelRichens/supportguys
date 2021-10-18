import styles from "../styles/ContentBoxTitle.module.css"

export default function ContentBoxTitle(props) {
	const backgroundColorStyle = props.backgroundColor
		? props.backgroundColor
		: ""
	return (
		<div
			className={"content-box " + styles["content-box-title"]}
			style={{
				marginTop: props.marginTop,
				backgroundColor: backgroundColorStyle
			}}
		>
			{props.children}
		</div>
	)
}
