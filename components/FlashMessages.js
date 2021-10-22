import { useContext, useEffect } from "react"

import FlashMessageContext from "../context/FlashMessageContext"

import styles from "../styles/FlashMessages.module.css"

export default function FlashMessages() {
	const { flashMessages, setFlashMessages } = useContext(FlashMessageContext)
	let deleteMessages = false

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
