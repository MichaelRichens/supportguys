import { useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"

import ContactForm from "../components/ContactForm"
import Page from "../components/Page"

export default function contactus() {
	const nodeRef = useRef(null)
	const [contactFormOpen, setContactFormOpen] = useState(false)

	function toggleContactForm() {
		setContactFormOpen((prev) => !prev)
	}

	return (
		<Page title="Contact Us">
			<CSSTransition
				nodeRef={nodeRef}
				in={contactFormOpen}
				timeout={500}
				classNames="contact_form"
				unmountOnExit
			>
				<ContactForm close={() => setContactFormOpen(false)} />
			</CSSTransition>
			<p>Contact Details.</p>
			<button type="button" onClick={toggleContactForm}>
				Email
			</button>
		</Page>
	)
}
