//Google Analytics functions

// log the pageview with their URL
export const pageview = (url) => {
	if (process.env.NODE_ENV == "production") {
		window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
			page_path: url
		})
	}
}

// log specific events happening.
export const event = ({ action, params }) => {
	if (process.env.NODE_ENV == "production") {
		window.gtag("event", action, params)
	}
}
