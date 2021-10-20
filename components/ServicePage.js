// Once viewport is below 400px, stylesheet will kick in and override titleBoxHeight and contentPaddingTop, so there is a limit to how much content
// can be put in the box without display problems.  Font size is also reduced at this point however to try to mitigate this.
// titleBoxWidth is will not exceed screen size - limited by max-width: 100% in stylesheet

import Link from "next/link"

import FindOutMore from "./FindOutMore"

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
				<div className={styles["content"]}>
					{props.children}
					<FindOutMore href="/contact_us" text="Contact Us" />
					<nav className={styles.backlink}>
						<Link href="/services">Back to Services</Link>
					</nav>
				</div>
			</div>
		</article>
	)
}
