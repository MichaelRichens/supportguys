import "../styles/globals.css"

import { FlashMessageProvider } from "../context/FlashMessageContext"

function MyApp({ Component, pageProps }) {
	return (
		<FlashMessageProvider>
			<Component {...pageProps} />
		</FlashMessageProvider>
	)
}

export default MyApp
