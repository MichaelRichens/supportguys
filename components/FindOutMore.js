import Link from "next/link"

import styles from "../styles/FindOutMore.module.css"

export default function FindOutMore(props) {
	return (
		<nav className={styles["find-out-more"]}>
			<nav>
				<Link href={props.href}>
					<a>+</a>
				</Link>
				<Link href={props.href}>
					{props.text ? <a>{props.text}</a> : <a>Find Out More</a>}
				</Link>
			</nav>
		</nav>
	)
}
