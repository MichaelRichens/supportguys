//Google Analytics functions

// log the page view with their URL
export function gaPageView(url) {
	if (process.env.NODE_ENV == "production") {
		window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
			page_path: url
		})
	}
}

// log specific events happening.
export function gaEvent({ action, params }) {
	if (process.env.NODE_ENV == "production") {
		window.gtag("event", action, params)
	}
}
