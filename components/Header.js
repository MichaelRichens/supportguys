import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Header.module.css"
import logo from "../public/images/support_guys_logo949x150.webp"

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles["logo-container"]}>
				<Link href="/">
					<a>
						<Image src={logo} quality="100" />
					</a>
				</Link>
			</div>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/contactus">
					<a>Contact</a>
				</Link>
				<Link href="/aboutus">
					<a>About Us</a>
				</Link>
				<Link href="/services">
					<a>Services</a>
				</Link>
				<Link href="/case_studies">
					<a>Case Studies</a>
				</Link>
				<Link href="/pricing">
					<a>Plans and Costs</a>
				</Link>
				<Link href="/whats_this_for">
					<a className={styles.urgent}>Support Now!</a>
				</Link>
				<Link href="/ticket">
					<a>Tickets</a>
				</Link>
			</nav>
		</header>
	)
}
