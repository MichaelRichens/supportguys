import { useContext, useEffect } from "react"

import FlashMessageContext from "../context/FlashMessageContext"

import styles from "../styles/FlashMessages.module.css"

export default function FlashMessages() {
	const { flashMessages } = useContext(FlashMessageContext)

	if (!flashMessages) {
		return <></>
	}
	return (
		<aside className={styles["floating-alerts"]}>
			{flashMessages.map((msg, index) => {
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
