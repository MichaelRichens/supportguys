//TODO this page doesn't really work.  Not putting contact form on page for Reasons, but the page loses balence without it.
// - maybe could put some ticketing stuff on page as well?
//TODO add social media links
import { useState, useRef } from "react"

import Page from "../components/Page"
import ContactForm from "../components/ContactForm"
import PopupOverlay from "../components/PopupOverlay"
import { useSharedIsContactFormOpen } from "../shared/useSharedIsContactFormOpen"

import styles from "../styles/contact_us.module.css"
import TextContactDetails from "../components/content_components/TextContactDetails"

export default function contact_us() {
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
		<Page title="Contact Us">
			<section
				className={`text-over-image ${styles["contact-us-intro"]}`}
				style={{
					backgroundImage:
						"url(/images/backgrounds/contact_us_image.jpg)"
				}}
			>
				<h1>Get in Touch</h1>
				<p>
					We're here to help you and your business
					{new Date().getFullYear() < 2023
						? " return to normality and beyond. "
						: " do what it does best. "}
					Whether it be an emergency support request or planning the
					next stage of your business growth, we are at your service.
					Let us share our 60 years of combined IT knowledge to help
					your business thrive.
				</p>
			</section>
			<section className={styles["contact-methods"]}>
				<h2>Contact Us</h2>
				<div>
					<section
						className={`content-box ${styles["contact-details"]}`}
					>
						<h3>Contact Details</h3>
						<TextContactDetails />
					</section>
					<nav className={`content-box ${styles["contact-now"]}`}>
						<h3>Email Us</h3>
						<div>
							<button type="button" onClick={toggleContactForm}>
								Click to Email!
							</button>
						</div>
					</nav>
				</div>
			</section>
			<PopupOverlay
				nodeRef={nodeRef}
				isOpen={isContactFormOpen}
				close={() => closeContactForm()}
			>
				<ContactForm closeContactForm={() => closeContactForm()} />
			</PopupOverlay>
		</Page>
	)
}