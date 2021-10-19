import styles from "../styles/ContentBoxMain.module.css"

// props:
// children go in the main block, under the title and beside the decorator line
// title - contents of the title area
// marginTop - spacing above the box. Default: "6em"
// marginLeft & marginRight - for positioning (there's a maxWidth as well).  Defaults on both: "auto" (which centers box)
// maxWidth - controlling max size.  Note .page-intro class (common container for this component) has descendent media queries
// 	 that reduce width directly at low viewport width.  Default 800px
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
				marginRight: `${
					props.marginRight ? props.marginRight : "auto"
				}`,
				maxWidth: `${props.maxWidth ? props.maxWidth : "800px"}`
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
