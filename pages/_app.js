import { useImmerReducer } from "use-immer"

import EmailContext from "../components/EmailContext"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	const initialEmailState = {
		name: "",
		nameWarn: "",
		email: "",
		emailWarn: "",
		subject: "",
		subjectWarn: "",
		body: "",
		bodyWarn: "",
		emailsSent: 0
	}

	function emailReducer(draft, action) {
		switch (action.type) {
			case "sent":
				draft.name = ""
				draft.nameWarn = ""
				draft.email = ""
				draft.emailWarn = ""
				draft.subject = ""
				draft.subjectWarn = ""
				draft.body = ""
				draft.bodyWarn = ""
				draft.emailsSent++
				return
			case "name":
				draft.name = action.value
				return
			case "nameWarn":
				draft.nameWarn = action.value
				return
			case "email":
				draft.email = action.value
				return
			case "emailWarn":
				draft.emailWarn = action.value
				return
			case "subject":
				draft.subject = action.value
				return
			case "subjectWarn":
				draft.subjectWarn = action.value
				return
			case "body":
				draft.body = action.value
				return
			case "bodyWarn":
				draft.bodyWarn = action.value
				return
			default:
				if (process.env.NODE_ENV == "development") {
					console.error(
						`emailReducer() received unknown action.type: ${action.type}`
					)
				} else {
					console.error("Email form error.")
				}
				return
		}
	}

	const [emailState, emailDispatch] = useImmerReducer(
		emailReducer,
		initialEmailState
	)

	return (
		<EmailContext.Provider
			value={{ emailState: emailState, emailDispatch: emailDispatch }}
		>
			<Component {...pageProps} />
		</EmailContext.Provider>
	)
}

export default MyApp
