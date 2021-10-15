import Link from "next/link"

import styles from "../styles/ContentBoxShadowed.module.css"

export default function ContentBoxShadowed(props) {
	return (
		<div class={styles["content-box-shadowed"]}>
			<div class="content-box">
				<div>{props.children}</div>
				{props.moroInfoHref && (
					<Link href={props.moroInfoHref}>
						<a className={styles["more-info"]}>+ Learn More</a>
					</Link>
				)}
			</div>
			<div> </div>
		</div>
	)
}
