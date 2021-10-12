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
		<form className={styles["contact-form"]}>	
			<h2>Send Us An Email</h2>
			<ValidationWarning condition={state.nameWarn != ""} message={state.nameWarn}  />
			<label>
				Your Name:
				<input type="text" placeholder="John Doe" name="name" value = {state.name} onChange={handleInputChange} />
			</label>
			<ValidationWarning condition={state.emailWarn != ""} message={state.emailWarn}  />
			<label>
				Your Email:
				<input type="text" placeholder="john.doe@example.com" name="email" value = {state.email} onChange={handleInputChange} />
			</label>
			<ValidationWarning condition={state.subjectWarn != ""} message={state.subjectWarn}  />
			<label>
				Subject:
				<input type="text" name="subject" onChange={handleInputChange} value = {state.subject} />
			</label>
			<ValidationWarning condition={state.bodyWarn != ""} message={state.bodyWarn}  />
			<label>
				Message:<textarea  name="body" onChange={handleInputChange} value = {state.body} />
			</label>
			<button type="submit" onClick={props.handleSubmit}>Send Email</button>
		</form>
	)
}
