import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

import styles from "../styles/Header.module.css"

import logo from "../public/images/logos/support_guys_logo900x140.png"

export default function Header(props) {
	const router = useRouter()
	const menu = [
		{ title: "Home", path: "/" },
		{ title: "Contact Us", path: "/contact_us" },
		{ title: "About Us", path: "/about_us" },
		{ title: "Services", path: "/services" },
		{ title: "Case Studies", path: "/case_studies" },
		{ title: "Plans and Costs", path: "/plans_and_costs" },
		{ title: "Get Support Now", path: "/support_now" },
		{ title: "Tickets", path: "/tickets" }
	]

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
				{menu.map((item, index) => {
					return (
						<Link key={index} href={item.path}>
							<a
								className={`${
									router.pathname === item.path
										? styles["current"]
										: ""
								}`}
							>
								{item.title}
							</a>
						</Link>
					)
				})}
			</nav>
			{props.children}
		</header>
	)
}
