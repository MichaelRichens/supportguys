import { useState } from "react"
import { useBetween } from "use-between"

const useFlashMessages = () => {
	const [flashMessages, setFlashMessages] = useState([])
	return { flashMessages, setFlashMessages }
}

export const useSharedFlashMessages = () => useBetween(useFlashMessages)
