import { useState } from "react"
import { useImmerReducer } from "use-immer"

import EmailContext, {
	emailReducer,
	initialEmailState
} from "../context/EmailContext"

import FlashMessageContext from "../context/FlashMessageContext"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	const [emailState, emailDispatch] = useImmerReducer(
		emailReducer,
		initialEmailState
	)
	const [flashMessages, setFlashMessages] = useState([])

	return (
		<FlashMessageContext.Provider
			value={{
				flashMessages: flashMessages,
				setFlashMessages: setFlashMessages
			}}
		>
			<EmailContext.Provider
				value={{ emailState: emailState, emailDispatch: emailDispatch }}
			>
				<Component {...pageProps} />
			</EmailContext.Provider>
		</FlashMessageContext.Provider>
	)
}

export default MyApp
