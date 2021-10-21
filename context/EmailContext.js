import { createContext } from "react"

const EmailContext = createContext()

export default EmailContext

const clientSide = typeof window !== "undefined"

// Some mucking around here, since we want to get any data stored in localStorage but maybe (probably are) running on the server here if the page has just been
// hard refreshed
// Put in a magic value, that we check for in a UseEffect in ContactForm.js, and pull from localStorage there
// (it does take a few seconds, hence using a human readable value - Update: not in prod it doesn't, long pause is dev only)
export const emailMagicServerPlaceholder = "..Please Wait.."

export const initialEmailState = {
	name:
		(clientSide && localStorage.getItem("contact_form_name")) ||
		emailMagicServerPlaceholder,
	nameWarn: "",
	email:
		(clientSide && localStorage.getItem("contact_form_email")) ||
		emailMagicServerPlaceholder,
	emailWarn: "",
	subject:
		(clientSide && localStorage.getItem("contact_form_subject")) ||
		emailMagicServerPlaceholder,
	subjectWarn: "",
	body:
		(clientSide && localStorage.getItem("contact_form_body")) ||
		emailMagicServerPlaceholder,
	bodyWarn: "",
	contactFormOpen: false
}

export function emailReducer(draft, action) {
	switch (action.type) {
		case "formClose":
			draft.contactFormOpen = false
			return
		case "formToggle":
			draft.contactFormOpen = !draft.contactFormOpen
			return
		case "sent":
			draft.name = ""
			draft.nameWarn = ""
			draft.email = ""
			draft.emailWarn = ""
			draft.subject = ""
			draft.subjectWarn = ""
			draft.body = ""
			draft.bodyWarn = ""
			draft.contactFormOpen = false
			return
		case "name":
			draft.name = action.value
			return
		case "nameWarn":
			draft.nameWarn = action.value
			return
		case "email":
			draft.email = action.value
			return
		case "emailWarn":
			draft.emailWarn = action.value
			return
		case "subject":
			draft.subject = action.value
			return
		case "subjectWarn":
			draft.subjectWarn = action.value
			return
		case "body":
			draft.body = action.value
			return
		case "bodyWarn":
			draft.bodyWarn = action.value
			return
		default:
			if (process.env.NODE_ENV == "development") {
				console.error(
					`emailReducer() received unknown action.type: ${action.type}`
				)
			} else {
				console.error("Email form error.")
			}
			return
	}
}
