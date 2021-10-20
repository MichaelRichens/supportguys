// TODO what if they want someone to come out onsite on an emergency basis?  Whould we quote a price?
// TODO removed out of hours text since it said nothing useful - was it meant to?
// TODO are the remote support tools we link to one or the other or both.  Do we have a preference? If so why might you want to go with the other one anyway?
// TODO get this read over by someone when done - changed a lot

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

import Page from "../components/Page"
import ContentBoxMain from "../components/ContentBoxMain"
import ContactForm from "../components/ContactForm"
import PopupOverlay from "../components/PopupOverlay"
import { useSharedIsContactFormOpen } from "../shared/useSharedIsContactFormOpen"

import stylesMainPage from "../styles/stylesMainPage.module.css"

import macupgrades_logo from "../public/images/logos/macupgrades_logo230x40.png"

export default function support_now() {
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
		<Page title={""} metaDescription="">
			<PopupOverlay
				nodeRef={nodeRef}
				isOpen={isContactFormOpen}
				close={() => closeContactForm()}
			>
				<ContactForm closeContactForm={() => closeContactForm()} />
			</PopupOverlay>
			<section
				className={stylesMainPage["page-intro"]}
				style={{
					backgroundImage:
						"url(/images/backgrounds/support_now_image_placeholder.jpg)"
				}}
			>
				<ContentBoxMain
					title="Get Support Now!"
					marginRight="5%"
					marginTop="5%"
					h1={true}
				>
					<p>
						Whether you have a support contract with us, or are a
						new customer with an issue, we are here to help. Please
						get in contact on {process.env.NEXT_PUBLIC_PHONE}, or
						send us an{" "}
						<span className="clickable" onClick={toggleContactForm}>
							email
						</span>{" "}
						and our team can walk you through the process. Or if you
						are an account customer you can use the{" "}
						<Link href="/tickets">ticket system</Link>.
					</p>
				</ContentBoxMain>
			</section>
			<section className="standard-text">
				<h2>
					We hear you. You've got a problem and it needs solving now.
				</h2>
				<p>
					Whether you currently have a support contract with us or
					not, you can raise a remote support incident with us. We can
					provide you with support by phone and using remote support
					tools.
				</p>
				<h3>Initial costs for Incident</h3>
				<p>
					If you do not have a support contract with us, the cost is
					{" " +
						process.env
							.NEXT_PUBLIC_COST_UNCONTRACTED_REMOTE_SUPPORT +
						" "}
					per incident. Depending on the nature of the issue this may
					or may not resolve the fault, but we will be able to give
					you a clearer idea of the severity and the likely costs of
					resolution after the first session. For non-account
					customers, payment is via Credit or Debit card.
				</p>
				<h3>Download remote support software for your computer</h3>
				<p>
					A lot of issues can be resolved remotely, using tools such
					as Team Viewer and Sygma Connect. These tools allow us to
					see your screen and operate your computer remotely, and get
					a quick handle on the issue.
				</p>
				<p>
					Remote access can reduce costs and improve recovery times.
					All our recommended tools are user authenticated and secure,
					with the user (you) authorising every access to your system.
					Sometimes issues can be resolved without a site visit. Other
					times a site visit will be necessary, and we can give you a
					plan and expected costs once we've made our assessment.
				</p>
				<p>Download the Remote access tools here:</p>
				<ul>
					<li>
						<Link href="https://www.sygmaconnect.com/en/home/download-version.php">
							Sygma Connect
						</Link>
					</li>
					<li>
						<Link href="https://www.teamviewer.com/download/">
							TEAM VIEWER
						</Link>
					</li>
				</ul>
			</section>
			<section className="standard-text">
				<h2>Looking for help with a single Mac?</h2>
				<p>
					Support Guys was formed to help our SME customers with
					larger and ongoing jobs. If you have a single Mac computer
					with issues or needing upgrades, then you will find more
					relevant information and support from our sister site{" "}
					<Link href="https://www.macupgrades.co.uk/store/">
						MacUpgrades.co.uk
					</Link>{" "}
					- machine specific pricing, hardware available for user
					installation, and a wealth of machine specific information.
				</p>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Link href="https://www.macupgrades.co.uk/store/">
						<a className="unstyle">
							<Image
								src={macupgrades_logo}
								width="230"
								height="40"
							/>
						</a>
					</Link>
				</div>
			</section>
		</Page>
	)
}
