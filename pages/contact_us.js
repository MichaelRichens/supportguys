//TODO add social media links
//TODO add google maps at bottom

import Page from "../components/Page"
import TextContactDetails from "../components/content_components/TextContactDetails"
import ContactForm from "../components/ContactForm"

import styles from "../styles/contact_us.module.css"

export default function contact_us() {
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
					<address
						className={`content-box ${styles["contact-details"]}`}
					>
						<h3>Contact Details</h3>
						<TextContactDetails />
					</address>
					<div className={`content-box ${styles["contact-now"]}`}>
						<ContactForm />
					</div>
				</div>
			</section>
		</Page>
	)
}
