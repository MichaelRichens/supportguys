import styles from "../styles/ContentBoxMain.module.css"

export default function ContentBoxMain(props) {
	return (
		<div className={"content-box " + styles["content-box-main"]}>
			<h2>{props.title}</h2>
			<div className={styles["text-container-with-line-decorator"]}>
				<div className={styles["decorator"]}></div>
				<div className={styles["text"]}>{props.children}</div>
			</div>
		</div>
	)
}
