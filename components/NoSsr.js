// I don't understand what this does, except prevent a "`dangerouslySetInnerHTML` did not match." error when using react-tooltip.
// If this component wraps the <ReactTooltip /> tag that causes the error, it stops it.
// I think it stops it from being rendered sever side, but idk
// Not 100% sure if the error even occurs in production - may be a dev only thing to do with css modules not being injected server side
// Source: https://stackoverflow.com/questions/64079321/react-tooltip-and-next-js-ssr-issue

import React, { useEffect, useState } from "react"

const NoSsr = ({ children }) => {
	const [isMounted, setMount] = useState(false)

	useEffect(() => {
		setMount(true)
	}, [])

	return <>{isMounted ? children : null}</>
}

export default NoSsr
