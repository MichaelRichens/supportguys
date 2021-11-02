import { createRef, useCallback, useContext, useEffect, useState } from "react"
import Link from "next/link"
import ReCAPTCHA from "react-google-recaptcha"

import EmailContext, {
	emailMagicServerPlaceholder
} from "../context/EmailContext"

import { gaEvent } from "../functions/ga"
import FlashMessageContext from "../context/FlashMessageContext"
import ValidationWarning from "./ValidationWarning"

import styles from "../styles/ContactFormInner.module.css"

export default function ContactFormInner() {
	const { emailState, emailDispatch } = useContext(EmailContext)
	const { setFlashMessages } = useContext(FlashMessageContext)
	const validationTimeout = 1500
	const recaptchaRef = createRef()
	// hacky fix for possible race condition - see comment above the useEffects below
	const [, updateState] = useState()
	const forceUpdate = useCallback(() => updateState({}), [])
	const [valueNotLoadedYet, setValueNotLoadedYet] = useState({
		name: emailState.name === emailMagicServerPlaceholder,
		email: emailState.email === emailMagicServerPlaceholder,
		subject: emailState.subject === emailMagicServerPlaceholder,
		body: emailState.body === emailMagicServerPlaceholder
	})

	function handleInputChange(e) {
		emailDispatch({ type: e.target.name, value: e.target.value })
	}

	const handleSubmit = (e) => {
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
			if (!valid) {
				emailDispatch({
					type: "emailWarn",
					value: "Invalid email address."
				})
			}
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
			recaptchaRef.current.execute()
		}
	}

	const onReCAPTCHAChange = (captchaCode) => {
		if (!captchaCode) {
			return
		}
		const data = {
			name: emailState.name,
			email: emailState.email,
			subject: emailState.subject,
			body: emailState.body,
			token: captchaCode
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
					gaEvent({
						action: "email"
					})
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
		recaptchaRef.current.reset()
	}

	function validateEmail() {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailState.email)) {
			return false
		}
		return true
	}

	// Apart from email, only validation warnings are for empty, which is only wanted on submit,
	// so just remove warning whenever a change is made

	//the screwing around with emailMagicServerPlaceholder is a hack, see note comments in EmailContext.js
	// - only relevant when this component has just been hard refreshed
	// - had an issue (only on netlify, dev was fine) where body for some reason sometimes rendered with the placeholder value after a hard refresh,
	// and its backing value then updated without forcing a rerender (race condition with update happening in EmailContext.js I *think*).
	// Added an even more complicated system with [valueNotLoadedYet, setValueNotLoadedYet] which checks what the backing value is when
	// the component loads and if it was the placeholder, forces an update in the first run of the relevant useEffect.
	// This seemed to solve it, though not entirely sure if it did so in the way I intended (the forceUpdate path doesn't seem to have been
	// actually followed as far as I can see, so it might just have been the extra code slowed things down enough for the race condition to not occur)
	const clientSide = typeof window !== "undefined" //doubt this check is needed, but might as well

	useEffect(() => {
		if (valueNotLoadedYet.name) {
			forceUpdate()
		}
		if (emailState.name === emailMagicServerPlaceholder) {
			emailDispatch({
				type: "name",
				value:
					(clientSide && localStorage.getItem("contact_form_name")) ||
					""
			})
		} else {
			localStorage.setItem("contact_form_name", emailState.name)
			setValueNotLoadedYet((prev) => {
				let next = { ...prev }
				next.name = false
				return next
			})
		}
		emailDispatch({ type: "nameWarn", value: "" })
	}, [emailState.name])

	useEffect(() => {
		if (valueNotLoadedYet.subject) {
			forceUpdate()
		}
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
			setValueNotLoadedYet((prev) => {
				let next = { ...prev }
				next.subject = false
				return next
			})
		}
		emailDispatch({ type: "subjectWarn", value: "" })
	}, [emailState.subject])

	useEffect(() => {
		if (valueNotLoadedYet.body) {
			forceUpdate()
		}
		if (emailState.body === emailMagicServerPlaceholder) {
			emailDispatch({
				type: "body",
				value:
					(clientSide && localStorage.getItem("contact_form_body")) ||
					""
			})
		} else {
			localStorage.setItem("contact_form_body", emailState.body)
			setValueNotLoadedYet((prev) => {
				let next = { ...prev }
				next.body = false
				return next
			})
		}
		emailDispatch({ type: "bodyWarn", value: "" })
	}, [emailState.body])

	useEffect(() => {
		if (valueNotLoadedYet.email) {
			forceUpdate()
		}
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
			setValueNotLoadedYet((prev) => {
				let next = { ...prev }
				next.email = false
				return next
			})
		}
		emailDispatch({ type: "emailWarn", value: "" })
		let timer = null
		if (emailState.email) {
			timer = setTimeout(() => {
				if (!validateEmail()) {
					emailDispatch({
						type: "emailWarn",
						value: "Invalid email address."
					})
				}
			}, validationTimeout)
		}

		return () => {
			clearTimeout(timer)
		}
	}, [emailState.email])

	return (
		<form className={styles["contact-form"]} onSubmit={handleSubmit}>
			<ReCAPTCHA
				ref={recaptchaRef}
				size="invisible"
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
				onChange={onReCAPTCHAChange}
			>
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
						onInput={handleInputChange}
						value={
							emailState.name !== emailMagicServerPlaceholder
								? emailState.name
								: ""
						}
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
						onInput={handleInputChange}
						value={
							emailState.email !== emailMagicServerPlaceholder
								? emailState.email
								: ""
						}
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
						onInput={handleInputChange}
						value={
							emailState.subject !== emailMagicServerPlaceholder
								? emailState.subject
								: ""
						}
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
						onInput={handleInputChange}
						value={
							emailState.body !== emailMagicServerPlaceholder
								? emailState.body
								: ""
						}
					/>
				</label>
				<button type="submit">Send Email</button>
				<p className={styles.mailto}>
					Or email us directly at:{" "}
					<Link href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}>
						{process.env.NEXT_PUBLIC_EMAIL}
					</Link>
				</p>
			</ReCAPTCHA>
		</form>
	)
}
