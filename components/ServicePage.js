// TODO once have several pages up with different sized titles, need to check and rework media queries since the
// styling requires a fair amount of hardcoding of sizes

import styles from "../styles/ServicePage.module.css"

export default function ServicePage(props) {
	const titleBoxHeight = props.titleBoxHeight ? props.titleBoxHeight : "150px"
	const titleBoxWidth = props.titleBoxWidth ? props.titleBoxWidth : "50%"
	const contentPaddingTop = props.contentPaddingTop
		? props.contentPaddingTop
		: "100px"
	const outerContainerHeight = props.imageBoxHeight
		? parseInt(props.imageBoxHeight)
		: 300
	const titleBoxTop = outerContainerHeight - 70
	const shadowBoxTop = titleBoxTop + 10
	return (
		<article>
			<div
				className={styles["title-container"]}
				style={{
					backgroundImage: `url(${props.backgroundImage})`,
					height: `${outerContainerHeight}px`
				}}
			>
				<div
					style={{
						width: titleBoxWidth,
						height: titleBoxHeight,
						top: `${titleBoxTop}px`
					}}
				>
					<h1>{props.pageTitle}</h1>
				</div>
				<div
					style={{
						width: titleBoxWidth,
						height: titleBoxHeight,
						top: `${shadowBoxTop}px`
					}}
				></div>
			</div>
			<div
				className={"content-box " + styles["service-page-content"]}
				style={{ paddingTop: contentPaddingTop }}
			>
				<div className={styles["line-decorator"]}></div>
				<div className={styles["content"]}>{props.children}</div>
			</div>
		</article>
	)
}
