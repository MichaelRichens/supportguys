import React from "react"

import styles from "../styles/ContactForm.module.css"

export default function ContactForm(props) {
	return (
		<div className={styles["contact-form"]}>
			<label>
				Your Name:
				<input type="text" />
			</label>
			<label>
				Your Email:
				<input type="text" />
			</label>
			<label>
				Subject:
				<input type="text" />
			</label>
			<label>
				Message:<textarea></textarea>
			</label>
			<button type="button" onClick={props.close}>
				Cancel
			</button>
		</div>
	)
}
