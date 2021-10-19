import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Header.module.css"

import logo from "../public/images/logos/support_guys_logo900x140.png"

export default function Header(props) {
	return (
		<header className={styles.header}>
			<div className={styles["logo-container"]}>
				<Link href="/">
					<a>
						<Image
							src={logo}
							quality="100"
							height="150"
							width="949"
						/>
					</a>
				</Link>
			</div>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/contact_us">
					<a>Contact Us</a>
				</Link>
				<Link href="/about_us">
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
			{props.children}
		</header>
	)
}
