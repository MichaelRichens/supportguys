import styles from "../styles/ContentBoxMain.module.css"

// props:
// children go in the main block, under the title and beside the decorator line
// title - contents of the title area
// marginTop - spacing above the box. Default: "6em"
// marginLeft & marginRight - for positioning (use CSS on its container if width override is needed).  Defaults on both: "auto" (which centers box)
// h1 - when true, title is wrapped in <h1>, when false uses <h2>.  Default false
// decoratorRight when true the horizontal line appears on the right of the props.children, otherwise to the left.  Default: false
export default function ContentBoxMain(props) {
	return (
		<div
			className={`content-box ${styles["content-box-main"]} ${
				!props.children ? styles["title-only"] : ""
			}`}
			style={{
				marginTop: `${props.marginTop ? props.marginTop : "6em"}`,
				marginLeft: `${props.marginLeft ? props.marginLeft : "auto"}`,
				marginRight: `${props.marginRight ? props.marginRight : "auto"}`
			}}
		>
			{props.h1 ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}
			{props.children && (
				<div
					className={`${
						styles["text-container-with-line-decorator"]
					} ${
						props.decoratorRight
							? styles[
									"text-container-with-line-decorator-reversed"
							  ]
							: ""
					}`}
				>
					<div className={styles["decorator"]} />
					<div className={styles["text"]}>{props.children}</div>
				</div>
			)}
		</div>
	)
}
