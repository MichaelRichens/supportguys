import { createContext, useState, useContext, useEffect } from "react"

const FlashMessageContext = createContext()

export function useFlashMessageContext() {
	return useContext(FlashMessageContext)
}

export function FlashMessageProvider({ children }) {
	const [flashMessages, setFlashMessages] = useState([])

	return (
		<FlashMessageContext.Provider
			value={{ flashMessages, setFlashMessages }}
		>
			{children}
		</FlashMessageContext.Provider>
	)
}
