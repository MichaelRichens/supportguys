import React from "react"

import styles from "../styles/ContactForm.module.css"

export default function ContactForm(props) {
	const emailDispatch = props.emailDispatch

	function handleChange(e)
	{
		emailDispatch({type: e.target.name, value: e.target.value })
	}

	return (
		<div className={styles["contact-form"]}>	
			<h2>Send Us An Email</h2>
			<label>
				Your Name:
				<input type="text" placeholder="John Doe" name="name" onChange={handleChange} />
			</label>
			<label>
				Your Email:
				<input type="text" placeholder="john.doe@example.com" name="email" onChange={handleChange} />
			</label>
			<label>
				Subject:
				<input type="text" name="subject" onChange={handleChange} />
			</label>
			<label>
				Message:<textarea  name="body" onChange={handleChange}></textarea>
			</label>
		</div>
	)
}
