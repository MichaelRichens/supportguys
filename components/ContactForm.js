import { useContext, useEffect } from "react"
import Link from "next/link"

import EmailContext, {
	emailMagicServerPlaceholder
} from "../context/EmailContext"
import FlashMessageContext from "../context/FlashMessageContext"

import ValidationWarning from "./ValidationWarning"

import styles from "../styles/ContactForm.module.css"
import Header from "./Header"

export default function ContactForm() {
	const { emailState, emailDispatch } = useContext(EmailContext)
	const { setFlashMessages } = useContext(FlashMessageContext)
	const validationTimeout = 1500

	function handleInputChange(e) {
		emailDispatch({ type: e.target.name, value: e.target.value })
	}

	function handleSubmit(e) {
		e.preventDefault()
		let valid = true
		if (!emailState.name) {
			emailDispatch({ type: "nameWarn", value: "No name entered." })
			valid = false
		}
		if (!emailState.email) {
			emailDispatch({
				type: "emailWarn",
				value: "No email address entered."
			})
			valid = false
		} else {
			valid = validateEmail()
		}
		if (!emailState.subject) {
			emailDispatch({ type: "subjectWarn", value: "No subject entered." })
			valid = false
		}
		if (!emailState.body) {
			emailDispatch({ type: "bodyWarn", value: "No message entered." })
			valid = false
		}
		if (valid) {
			const data = {
				name: emailState.name,
				email: emailState.email,
				subject: emailState.subject,
				body: emailState.body
			}
			fetch("/api/contact", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
				.then((res) => {
					if (res.status === 200) {
						setFlashMessages((prev) =>
							prev.concat({
								class: "success",
								message: "Email Sent!"
							})
						)
						emailDispatch({ type: "sent" })
					} else {
						console.error(res)
						setFlashMessages((prev) =>
							prev.concat({
								class: "error",
								message: "Sorry, email failed..."
							})
						)
					}
				})
				.catch((error) => {
					console.error(error)
					setFlashMessages((prev) =>
						prev.concat({
							class: "error",
							message: "Sorry, email failed..."
						})
					)
				})
		}
	}

	function validateEmail() {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailState.email)) {
			emailDispatch({
				type: "emailWarn",
				value: "Invalid email address."
			})
			return false
		}
		return true
	}

	// Apart from email, only validation warnings are for empty, which is only wanted on submit,
	// so just remove warning whenever a change is made

	//the screwing around with emailMagicServerPlaceholder is a hack, see note comments in EmailContext.js
	// - only relevant when this component has just been hard refreshed
	const clientSide = typeof window !== "undefined" //doubt this check is needed, but might as well

	useEffect(() => {
		if (emailState.name === emailMagicServerPlaceholder) {
			emailDispatch({
				type: "name",
				value:
					(clientSide && localStorage.getItem("contact_form_name")) ||
					""
			})
		} else {
			localStorage.setItem("contact_form_name", emailState.name)
		}
		emailDispatch({ type: "nameWarn", value: "" })
	}, [emailState.name])

	useEffect(() => {
		if (emailState.subject === emailMagicServerPlaceholder) {
			emailDispatch({
				type: "subject",
				value:
					(clientSide &&
						localStorage.getItem("contact_form_subject")) ||
					""
			})
		} else {
			localStorage.setItem("contact_form_subject", emailState.subject)
		}
		emailDispatch({ type: "subjectWarn", value: "" })
	}, [emailState.subject])

	useEffect(() => {
		if (emailState.body === emailMagicServerPlaceholder) {
			emailDispatch({
				type: "body",
				value:
					(clientSide && localStorage.getItem("contact_form_body")) ||
					""
			})
		} else {
			localStorage.setItem("contact_form_body", emailState.body)
		}
		emailDispatch({ type: "bodyWarn", value: "" })
	}, [emailState.body])

	useEffect(() => {
		if (emailState.email === emailMagicServerPlaceholder) {
			emailDispatch({
				type: "email",
				value:
					(clientSide &&
						localStorage.getItem("contact_form_email")) ||
					""
			})
		} else {
			localStorage.setItem("contact_form_email", emailState.email)
		}
		emailDispatch({ type: "emailWarn", value: "" })
		let timer = null
		if (emailState.email) {
			timer = setTimeout(() => validateEmail(), validationTimeout)
		}

		return () => {
			clearTimeout(timer)
		}
	}, [emailState.email])

	return (
		<form className={styles["contact-form"]} onSubmit={handleSubmit}>
			<h2>Send Us An Email</h2>
			<ValidationWarning
				condition={emailState.nameWarn != ""}
				message={emailState.nameWarn}
			/>
			<label>
				Your Name:
				<input
					type="text"
					name="name"
					autoComplete="name"
					value={emailState.name}
					onChange={handleInputChange}
				/>
			</label>
			<ValidationWarning
				condition={emailState.emailWarn != ""}
				message={emailState.emailWarn}
			/>
			<label>
				Your Email:
				<input
					type="text"
					placeholder="email@example.com"
					name="email"
					autoComplete="email"
					value={emailState.email}
					onChange={handleInputChange}
				/>
			</label>
			<ValidationWarning
				condition={emailState.subjectWarn != ""}
				message={emailState.subjectWarn}
			/>
			<label>
				Subject:
				<input
					type="text"
					name="subject"
					autoComplete="off"
					onChange={handleInputChange}
					value={emailState.subject}
				/>
			</label>
			<ValidationWarning
				condition={emailState.bodyWarn != ""}
				message={emailState.bodyWarn}
			/>
			<label>
				Message:
				<textarea
					name="body"
					autoComplete="off"
					onChange={handleInputChange}
					value={emailState.body}
				/>
			</label>
			<button type="submit">Send Email</button>
			<p className={styles.mailto}>
				Or email us directly at:{" "}
				<Link href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}>
					{process.env.NEXT_PUBLIC_EMAIL}
				</Link>
			</p>
		</form>
	)
}
