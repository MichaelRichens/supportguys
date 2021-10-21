import { createContext } from "react"

const EmailContext = createContext()

export default EmailContext

const clientSide = typeof window !== "undefined"

export const initialEmailState = {
	name: (clientSide && localStorage.getItem("contact_form_name")) || "",
	nameWarn: "",
	email: (clientSide && localStorage.getItem("contact_form_email")) || "",
	emailWarn: "",
	subject: (clientSide && localStorage.getItem("contact_form_subject")) || "",
	subjectWarn: "",
	body: (clientSide && localStorage.getItem("contact_form_body")) || "",
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
