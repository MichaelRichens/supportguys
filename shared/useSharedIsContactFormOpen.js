import { useState } from "react"
import { useBetween } from "use-between"

// this component solves a problem (just about) with multiple ContactForm.js able to be opened if multiple components that are on page at the same
// (eg one in footer and one rendered in the page body) time have their own contact forms.  Tried multiple better ways like having more of the control logic
// in shared componenets and only having a single form, but got so many problems I ended up doing it this way.
// Any contact forms need to have their own opening and closing logic implemented on the component that contains them, and that logic needs to use and update
// this shared componenet, and only allow form to open when sharedIsContactFormOpen == false

const useIsContactFormOpen = () => {
	const [sharedIsContactFormOpen, setSharedIsContactFormOpen] =
		useState(false)

	return { sharedIsContactFormOpen, setSharedIsContactFormOpen }
}

export const useSharedIsContactFormOpen = () => useBetween(useIsContactFormOpen)
