import { CSSTransition } from "react-transition-group"

import styles from "../styles/FlashMessages.module.css"

export default function FlashMessages(props) {
	if (!props.messages) {
		return <></>
	}
	return (
		<aside className={styles["floating-alerts"]}>
			{props.messages.map((msg, index) => {
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
