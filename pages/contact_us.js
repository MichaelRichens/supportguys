//TODO this page doesn't really work.  Not putting contact form on page for Reasons, but the page loses balence without it.
// - maybe could put some ticketing stuff on page as well?
//TODO add social media links
//TODO add google maps at bottom
import { useContext, useRef } from "react"

import Page from "../components/Page"
import EmailContext from "../context/EmailContext"

import styles from "../styles/contact_us.module.css"
import TextContactDetails from "../components/content_components/TextContactDetails"
import ContactForm from "../components/ContactForm"

export default function contact_us() {
	const { emailDispatch } = useContext(EmailContext)

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
					<div className={`content-box ${styles["contact-now"]}`}>
						<ContactForm />
					</div>
				</div>
			</section>
		</Page>
	)
}
