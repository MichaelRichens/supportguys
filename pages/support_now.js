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
import teamviewer_logo from "../public/images/logos/teamviewer_logo220x50.png"
import sygmaconnect_logo from "../public/images/logos/sygmaconnect_logo158x50.png"

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
						"url(/images/backgrounds/support_now_image.jpg)"
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
					tools. Or we can book you in for an on-site assessment or
					visit to better understand the issue.{" "}
					<Link href="/contact_us">Contact us</Link> for details.
				</p>
				<h3>Initial costs for Incident</h3>
				<p>
					If you do not have a support contract with us, the cost is
					{" " +
						process.env
							.NEXT_PUBLIC_COST_UNCONTRACTED_REMOTE_SUPPORT +
						" "}
					per remote support incident, or{" "}
					{" " +
						process.env.NEXT_PUBLIC_COST_UNCONTRACTED_DAY_RATE +
						" "}{" "}
					for a day on-site with you. Depending on the nature of the
					issue this may or may not resolve the fault, but we will be
					able to give you a clearer idea of the severity and the
					likely costs of resolution after the first session. For
					non-account customers, payment is via Credit or Debit card.
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
				<p>Download the remote access tools here:</p>
				<ul className="logo-list">
					<li>
						<Link href="https://www.sygmaconnect.com/en/home/download-version.php">
							<a className="image-link">
								<Image src={sygmaconnect_logo} />
							</a>
						</Link>
					</li>
					<li>
						<Link href="https://www.teamviewer.com/download/">
							<a className="image-link">
								<Image src={teamviewer_logo} />
							</a>
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
						<a className="image-link">
							<Image src={macupgrades_logo} />
						</a>
					</Link>
				</div>
			</section>
		</Page>
	)
}
