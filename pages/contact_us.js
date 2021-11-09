import Page from "../components/Page"
import TextContactDetails from "../components/content_components/TextContactDetails"
import ContactForm from "../components/ContactForm"

import styles from "../styles/contact_us.module.css"

export default function contact_us() {
	const currentYear = new Date().getFullYear()

	return (
		<Page
			title="Contact Us"
			metaDescription="Contact details and address for Support Guys, Apple Mac specialist IT support for UK SMEs."
		>
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
					{currentYear < 2023
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
						<address>
							<TextContactDetails />
						</address>
					</section>
					<div className={`content-box ${styles["contact-now"]}`}>
						<ContactForm />
					</div>
				</div>
			</section>
			<div className="map">
				<iframe src="https://www.google.com/maps/d/u/1/embed?mid=1GK87q0dlrIf1Mk58bsD1F-xX3ibKxqM5" />
			</div>
		</Page>
	)
}
