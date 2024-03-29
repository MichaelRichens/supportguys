import { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import ReactTooltip from "react-tooltip"

import EmailContext from "../context/EmailContext"

import NoSsr from "./NoSsr"

import styles from "../styles/Header.module.css"

import banner from "../public/images/logos/support_guys_logo900x140.png"
import emailIcon from "../public/images/icons/email_white_icon35x20.png"

export default function Header(props) {
	const { emailDispatch } = useContext(EmailContext)
	const router = useRouter()
	const menu = [
		{ title: "Home", path: "/" },
		{ title: "Contact Us", path: "/contact_us" },
		{ title: "About Us", path: "/about_us" },
		{ title: "Services", path: "/services" },
		{ title: "Case Studies", path: "/case_studies" },
		{ title: "Plans and Costs", path: "/plans_and_costs" },
		{ title: "Get Support Now", path: "/support_now" }
	]
	if (process.env.NEXT_PUBLIC_TICKET_SYSTEM_ACTIVE != 0) {
		menu.push({ title: "Tickets", path: "/tickets" })
	}

	return (
		<header className={styles.header}>
			<div className={styles["logo-container"]}>
				<Link href="/">
					<a>
						<Image
							src={banner}
							quality="100"
							height="150"
							width="949"
							alt="Support Guys"
							priority={true}
						/>
					</a>
				</Link>
			</div>
			<nav className={styles.links}>
				{menu.map((item, index) => {
					return router.pathname !== item.path ? (
						<Link key={index} href={item.path}>
							<a>{item.title}</a>
						</Link>
					) : (
						<span key={index} className={styles.current}>
							{item.title}
						</span>
					)
				})}
				<div
					className={styles.email}
					onClick={() => emailDispatch({ type: "formToggle" })}
				>
					<Image
						src={emailIcon}
						data-tip="Email Us"
						data-for="emailUs"
						data-event-off="click"
						alt="Email Us"
					/>
				</div>
			</nav>
			<NoSsr>
				<ReactTooltip
					id="emailUs"
					place="left"
					offset={{ top: "10", left: "15" }}
					type="light"
					border={true}
					borderColor="cyan"
					delayShow={100}
				/>
			</NoSsr>
			{props.children}
		</header>
	)
}
