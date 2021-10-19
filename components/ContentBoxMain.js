import styles from "../styles/ContentBoxMain.module.css"

export default function ContentBoxMain(props) {
	return (
		<div
			className={`content-box ${styles["content-box-main"]} ${
				!props.children ? styles["title-only"] : ""
			}`}
			style={{
				marginTop: `${props.marginTop ? props.marginTop : "6em"}`,
				marginLeft: `${props.marginLeft ? props.marginLeft : "auto"}`,
				marginRight: `${
					props.marginRight ? props.marginRight : "auto"
				}`,
				maxWidth: `${props.maxWidth ? props.maxWidth : "800px"}`
			}}
		>
			{props.h1 ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}
			{props.children && (
				<div className={styles["text-container-with-line-decorator"]}>
					<div className={styles["decorator"]}></div>
					<div className={styles["text"]}>{props.children}</div>
				</div>
			)}
		</div>
	)
}
