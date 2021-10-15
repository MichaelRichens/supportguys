import { useState, useRef } from "react"

import ContactForm from "../../components/ContactForm"
import PopupOverlay from "../../components/PopupOverlay"
import { useSharedIsContactFormOpen } from "../../shared/useSharedIsContactFormOpen"

export default function TextContactDetails() {
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
		<>
			<dl>
				<dt>Tel</dt>
				<dd>{process.env.NEXT_PUBLIC_PHONE}</dd>
				<dt className="clickable" onClick={toggleContactForm}>
					email
				</dt>
				<dd className="clickable" onClick={toggleContactForm}>
					{process.env.NEXT_PUBLIC_EMAIL}
				</dd>
				<dt>Address</dt>
				<dd>
					<ul>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_STREET}</li>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_LOCAILTY}</li>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_REGION}</li>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_POSTCODE}</li>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_COUNTRY}</li>
					</ul>
				</dd>
			</dl>
			<PopupOverlay
				nodeRef={nodeRef}
				isOpen={isContactFormOpen}
				close={() => closeContactForm()}
			>
				<ContactForm closeContactForm={() => closeContactForm()} />
			</PopupOverlay>
		</>
	)
}
