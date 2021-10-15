// TODO check the blue colours with gavin in the footer - not close match for design
import { useState, useRef } from "react"
import Link from "next/link"

import ContactForm from "../components/ContactForm"
import PopupOverlay from "../components/PopupOverlay"
import { useSharedIsContactFormOpen } from "../shared/useSharedIsContactFormOpen"

import styles from "../styles/Footer.module.css"

export default function Footer() {
	const nodeRef = useRef(null)
	const [isContactFormOpen, setContactFormOpen] = useState(false)
	const { sharedIsContactFormOpen, setSharedIsContactFormOpen } =
		useSharedIsContactFormOpen()

	function toggleContactForm() {
		setContactFormOpen((prev) => {
			if (prev) {
				setSharedIsContactFormOpen(false)
				return false
			} else {
				if (sharedIsContactFormOpen) {
					return false
				}
				setSharedIsContactFormOpen(true)
				return true
			}
		})
	}

	function closeContactForm() {
		setSharedIsContactFormOpen(false)
		setContactFormOpen(false)
	}

	return (
		<footer id="footer">
			<PopupOverlay
				nodeRef={nodeRef}
				isOpen={isContactFormOpen}
				close={() => closeContactForm()}
			>
				<ContactForm closeContactForm={() => closeContactForm()} />
			</PopupOverlay>
			<section>
				<section className={styles.contact}>
					<h3>
						<Link href="/contactus">Contact Us</Link>
					</h3>
					<dl>
						<dt>Tel</dt>
						<dd>{process.env.NEXT_PUBLIC_PHONE}</dd>
						<dt className="clickable" onClick={toggleContactForm}>
							email
						</dt>
						<dd className="clickable" onClick={toggleContactForm}>
							{process.env.NEXT_PUBLIC_EMAIL}
						</dd>
						<dt>Address</dt>
						<dd>
							<ul>
								<li>
									{process.env.NEXT_PUBLIC_ADDRESS_STREET}
								</li>
								<li>
									{process.env.NEXT_PUBLIC_ADDRESS_LOCAILTY}
								</li>
								<li>
									{process.env.NEXT_PUBLIC_ADDRESS_REGION}
								</li>
								<li>
									{process.env.NEXT_PUBLIC_ADDRESS_POSTCODE}
								</li>
								<li>
									{process.env.NEXT_PUBLIC_ADDRESS_COUNTRY}
								</li>
							</ul>
						</dd>
					</dl>
				</section>
				<section>
					<h3>Social</h3>
				</section>
				<nav className={styles.contact}>
					<h3>Our Other Brands</h3>
					<dl>
						<dt>
							<Link href="https://www.macupgrades.co.uk/store/">
								MacUpgrades
							</Link>
						</dt>
						<dd>
							Repair and Upgrades for Macintosh Computers since
							2005, specialising in board level repairs and
							detailed compatability guidance.
						</dd>

						<dt>
							<Link href="https://www.appcentre.co.uk/softstore/">
								AppCentre
							</Link>
						</dt>
						<dd>
							Supplying and supporting Kerio Connect mailserver
							and Control firewall, and other Kerio and GFI
							business software.
						</dd>
					</dl>
				</nav>
			</section>
		</footer>
	)
}
