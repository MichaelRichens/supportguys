import { useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { useImmerReducer } from "use-immer"

import Page from "../components/Page"
import ContactForm from "../components/ContactForm"

export default function contactus() {
	const nodeRef = useRef(null)
	const [contactFormOpen, setContactFormOpen] = useState(false)
	const initialState = {
		email: {
			name: "",
			email: "",
			subject: "",
			body: ""
		}
	}

	function emailReducer(draft, action) {
		switch (action.type) {
			default:
				if (process.env.NODE_ENV == "development") {
					console.error(
						`emailReducer() received unknown action.type: ${action.type}`
					)
				} else {
					console.error("Email error.")
				}
		}
	}

	const [state, dispatch] = useImmerReducer(emailReducer, initialState)

	function toggleContactForm() {
		setContactFormOpen((prev) => !prev)
	}

	return (
		<Page title="Contact Us">
			<CSSTransition
				nodeRef={nodeRef}
				in={contactFormOpen}
				timeout={500}
				classNames="contact-form"
				unmountOnExit
			>
				<ContactForm
					nodeRef={nodeRef}
					close={() => setContactFormOpen(false)}
				/>
			</CSSTransition>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				in neque est. Maecenas quis nisl pellentesque, blandit urna id,
				dictum lorem. Curabitur et ipsum ante. Maecenas pellentesque
				vestibulum erat, in ornare enim volutpat hendrerit. Praesent
				laoreet tempus sagittis. Pellentesque molestie sem metus, ut
				viverra tellus volutpat accumsan. Nulla tincidunt lectus a ex
				tristique, sed ultrices tortor molestie. Mauris ut dolor sed
				augue rutrum mollis ut molestie tellus. Maecenas dignissim lacus
				ac leo finibus, sit amet pharetra enim tempus. Aliquam neque
				nisl, tincidunt id dapibus feugiat, euismod nec leo. In molestie
				malesuada vulputate. In tincidunt est vitae volutpat venenatis.
				Phasellus ac arcu non turpis rutrum ullamcorper nec ut est. Sed
				gravida mauris sodales egestas feugiat.
			</p>

			<p>
				Integer diam dolor, blandit vitae ipsum non, facilisis ultricies
				risus. Quisque egestas lorem nec massa venenatis, ac lacinia
				ligula gravida. Aliquam maximus porttitor justo quis eleifend.
				Maecenas condimentum lorem eu lorem porta pellentesque.
				Vestibulum rutrum id justo ac convallis. Morbi egestas lorem
				vitae lobortis suscipit. Suspendisse risus lectus, rutrum nec
				ligula interdum, convallis tempus sem. Vestibulum ante ipsum
				primis in faucibus orci luctus et ultrices posuere cubilia
				curae; Praesent hendrerit sapien ac lobortis blandit. Vestibulum
				ante ipsum primis in faucibus orci luctus et ultrices posuere
				cubilia curae; Sed a diam quis neque ullamcorper tincidunt
				aliquet vel ligula. Duis viverra velit ac convallis condimentum.
				Curabitur ultrices maximus massa nec vehicula. Suspendisse vel
				tortor sit amet quam congue sollicitudin.
			</p>

			<p>
				Morbi non sollicitudin turpis. Orci varius natoque penatibus et
				magnis dis parturient montes, nascetur ridiculus mus. Donec eros
				elit, suscipit quis pretium ut, molestie eget tortor. Sed
				interdum mauris elit, ac imperdiet libero lobortis id. Duis sed
				lectus libero. Suspendisse auctor ex id tincidunt rhoncus. Morbi
				lacinia orci a iaculis pellentesque. Phasellus scelerisque
				sodales orci, vel semper orci consectetur sit amet. Curabitur
				tristique sem at convallis efficitur. Pellentesque in quam
				aliquet, luctus sapien id, congue massa. Etiam cursus est quis
				purus interdum pharetra ut et eros. Phasellus finibus vitae diam
				et rhoncus.
			</p>

			<p>
				Integer ut pretium ligula, sed vulputate augue. Suspendisse a
				diam dictum, lacinia tellus nec, ornare turpis. Mauris mauris
				quam, dapibus in purus et, iaculis rhoncus nisi. Pellentesque
				habitant morbi tristique senectus et netus et malesuada fames ac
				turpis egestas. Sed vitae tortor ipsum. Vivamus id elementum
				metus, et gravida turpis. Sed bibendum mauris sit amet dui
				sollicitudin, non consectetur ex aliquam. Nulla at orci
				malesuada, convallis dolor tempor, aliquet lacus. Sed quis
				tellus a nisi tempus rutrum in id metus. Nunc ac eros orci.
				Proin ligula arcu, pulvinar vel facilisis ac, condimentum vel
				metus. Fusc
			</p>
			<button type="button" onClick={toggleContactForm}>
				Email
			</button>
		</Page>
	)
}
