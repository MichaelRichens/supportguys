import styles from "../styles/ContentBoxTitle.module.css"

export default function ContentBoxTitle(props) {
	return (
		<div
			className={"content-box " + styles["content-box-title"]}
			style={{ marginTop: props.marginTop }}
		>
			{props.children}
		</div>
	)
}
