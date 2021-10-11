import React from "react"
import ReactTooltip from "react-tooltip"

export default function ContactForm(props) {
	return (
		<div ref={props.nodeRef} className="contact-form">
			<nav className="close-button">
				<button type="button" onClick={props.close} data-tip="Close">
					X
				</button>
				<ReactTooltip place="left" delayShow={200} />
			</nav>
			<h2>Send Us An Email</h2>
			<label>
				Your Name:
				<input type="text" placeholder="John Doe" />
			</label>
			<label>
				Your Email:
				<input type="text" placeholder="john.doe@example.com" />
			</label>
			<label>
				Subject:
				<input type="text" />
			</label>
			<label>
				Message:<textarea></textarea>
			</label>
		</div>
	)
}
