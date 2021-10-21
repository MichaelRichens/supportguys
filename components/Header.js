import { useContext, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

import EmailContext from "./EmailContext"
import PopupOverlay from "./PopupOverlay"
import ContactForm from "./ContactForm"

import styles from "../styles/Header.module.css"

import logo from "../public/images/logos/support_guys_logo900x140.png"

export default function Header(props) {
	const { emailState, emailDispatch } = useContext(EmailContext)
	const nodeRef = useRef(null)
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
			</nav>
			{props.children}
			<PopupOverlay
				nodeRef={nodeRef}
				isOpen={emailState.contactFormOpen}
				close={() => emailDispatch({ type: "formClose" })}
			>
				<ContactForm />
			</PopupOverlay>
		</header>
	)
}
