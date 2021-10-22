import { useContext, useEffect } from "react"

import FlashMessageContext from "../context/FlashMessageContext"

import styles from "../styles/FlashMessages.module.css"

export default function FlashMessages() {
	const { flashMessages, setFlashMessages } = useContext(FlashMessageContext)
	let deleteMessages = false

	// This deletes the messages that are currently being shown, once they've been copied out into a temporary var
	// ready for display.  Guess there is a possibility for a race condition here, if a message gets added between the
	// copy and deletion, but I think its tolerable.
	useEffect(() => {
		if (deleteMessages) {
			setFlashMessages([])
			deleteMessages = false
		}
	}, [deleteMessages])

	if (!flashMessages) {
		return <></>
	}
	const messages = [...flashMessages]
	deleteMessages = true
	return (
		<aside className={styles["floating-alerts"]}>
			{messages.map((msg, index) => {
				return (
					<div
						className={
							styles["floating-alert"] +
							" " +
							styles[`floating-alert-${msg.class}`]
						}
						key={index}
					>
						{msg.message}
					</div>
				)
			})}
		</aside>
	)
}
