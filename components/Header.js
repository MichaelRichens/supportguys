import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Header.module.css"
import logo from "../public/images/logos/support_guys_logo949x150.webp"

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
					<a>Contact Us</a>
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
				<Link href="/plans_and_costs">
					<a>Plans and Costs</a>
				</Link>
				<Link href="/support_now">
					<a className={styles.urgent}>Get Support Now!</a>
				</Link>
				<Link href="/tickets">
					<a>Tickets</a>
				</Link>
			</nav>
		</header>
	)
}
