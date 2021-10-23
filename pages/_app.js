import { useImmerReducer } from "use-immer"

import EmailContext, {
	emailReducer,
	initialEmailState
} from "../context/EmailContext"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
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
