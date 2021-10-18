import styles from "../styles/ContentBoxMain.module.css"

export default function ContentBoxMain(props) {
	return (
		<div className="content-box">
			{props.h1 ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}
			<div className={styles["text-container-with-line-decorator"]}>
				<div className={styles["decorator"]}></div>
				<div className={styles["text"]}>{props.children}</div>
			</div>
		</div>
	)
}
