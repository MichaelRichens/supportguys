import { useState, useRef } from "react"
import Link from "next/link"

import ContactForm from "../components/ContactForm"
import PopupOverlay from "../components/PopupOverlay"

export default function Footer() {
	const nodeRef = useRef(null)
	const [isContactFormOpen, setContactFormOpen] = useState(false)

	function toggleContactForm() {
		setContactFormOpen((prev) => !prev)
	}

	return (
		<footer>
			<PopupOverlay
				nodeRef={nodeRef}
				isOpen={isContactFormOpen}
				close={() => setContactFormOpen(false)}
			>
				<ContactForm
					closeContactForm={() => setContactFormOpen((prev) => false)}
				/>
			</PopupOverlay>
			<p>Footer</p>
			<nav>
				<Link href="/">
					<a>Home Page</a>
				</Link>
				<Link href="/aboutus">
					<a>About Us</a>
				</Link>
				<Link href="/contactus">
					<a>Contact Us</a>
				</Link>
				<button type="button" onClick={toggleContactForm}>
					Email
				</button>
			</nav>
		</footer>
	)
}
