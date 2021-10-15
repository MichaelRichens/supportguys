import styles from "../styles/ContentBoxShadowed.module.css"

export default function ContentBoxShadowed(props) {
	return (
		<div class={styles["content-box-shadowed"]}>
			<div class="content-box">{props.children}</div>
			<div> </div>
		</div>
	)
}
