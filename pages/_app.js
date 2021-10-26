import { useEffect } from "react"
import { useRouter } from "next/router"
import { useImmerReducer } from "use-immer"

import { gaPageview } from "../functions/ga"

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

	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url) => {
			process.env.NODE_ENV == "production"
			gaPageview(url)
		}
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on("routeChangeComplete", handleRouteChange)

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange)
		}
	}, [router.events])

	return (
		<EmailContext.Provider
			value={{ emailState: emailState, emailDispatch: emailDispatch }}
		>
			<Component {...pageProps} />
		</EmailContext.Provider>
	)
}

export default MyApp
