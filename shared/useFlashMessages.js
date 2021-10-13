import { useState } from "react"
import { useBetween } from "use-between"

const flashMessages = () => useState([])

export const useFlashMessages = () => useBetween(flashMessages)
