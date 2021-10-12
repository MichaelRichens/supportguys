import React from "react"

import styles from "../styles/ContactForm.module.css"

import ValidationWarning from "./ValidationWarning"

export default function ContactForm(props) {
	const state = props.emailState
	const dispatch = props.emailDispatch

	function handleInputChange(e)
	{
		dispatch({type: e.target.name, value: e.target.value })
	}

	return (
		<div className={styles["contact-form"]}>	
			<h2>Send Us An Email</h2>
			<label>
				Your Name:
				<input type="text" placeholder="John Doe" name="name" onChange={handleInputChange} />
			</label>
			<ValidationWarning condition={state.emailWarn != ""} message={state.emailWarn}  />
			<label>
				Your Email:
				<input type="text" placeholder="john.doe@example.com" name="email" onChange={handleInputChange} />
			</label>
			<label>
				Subject:
				<input type="text" name="subject" onChange={handleInputChange} />
			</label>
			<label>
				Message:<textarea  name="body" onChange={handleInputChange}></textarea>
			</label>
		</div>
	)
}
