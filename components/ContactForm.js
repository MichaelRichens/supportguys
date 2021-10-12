import React from "react"

import styles from "../styles/ContactForm.module.css"

export default function ContactForm(props) {
	return (
		<div className={styles["contact-form"]}>
			
			<h2>Send Us An Email</h2>
			<label>
				Your Name:
				<input type="text" placeholder="John Doe" />
			</label>
			<label>
				Your Email:
				<input type="text" placeholder="john.doe@example.com" />
			</label>
			<label>
				Subject:
				<input type="text" />
			</label>
			<label>
				Message:<textarea></textarea>
			</label>
		</div>
	)
}
