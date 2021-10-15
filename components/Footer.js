import { useState, useRef } from "react"
import Link from "next/link"

import ContactForm from "../components/ContactForm"
import PopupOverlay from "../components/PopupOverlay"
import { useSharedIsContactFormOpen } from "../shared/useSharedIsContactFormOpen"

export default function Footer() {
	const nodeRef = useRef(null)
	const [isContactFormOpen, setContactFormOpen] = useState(false)
	const { sharedIsContactFormOpen, setSharedIsContactFormOpen } =
		useSharedIsContactFormOpen()

	function toggleContactForm() {
		setContactFormOpen((prev) => {
			if (prev) {
				setSharedIsContactFormOpen(false)
				return false
			} else {
				if (sharedIsContactFormOpen) {
					return false
				}
				setSharedIsContactFormOpen(true)
				return true
			}
		})
	}

	function closeContactForm() {
		setSharedIsContactFormOpen(false)
		setContactFormOpen(false)
	}

	return (
		<footer>
			<PopupOverlay
				nodeRef={nodeRef}
				isOpen={isContactFormOpen}
				close={() => closeContactForm()}
			>
				<ContactForm closeContactForm={() => closeContactForm()} />
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
