import { useState, useRef } from "react"
import Link from "next/link"

import Page from "../components/Page"
import ContentBoxMain from "../components/ContentBoxMain"
import ContactForm from "../components/ContactForm"
import PopupOverlay from "../components/PopupOverlay"
import { useSharedIsContactFormOpen } from "../shared/useSharedIsContactFormOpen"

import stylesMainPage from "../styles/stylesMainPage.module.css"

export default function plans_and_costs() {
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
			<section
				className={stylesMainPage["page-intro"]}
				style={{
					backgroundImage:
						"url(/images/backgrounds/plans_and_costs_image.jpg)"
				}}
			>
				<ContentBoxMain
					title="Plans and Costs"
					h1={true}
					marginRight="10%"
				>
					<h2>Clear Upfront Pricing Information</h2>
					<p>
						If you don't have a contract with us, we can work with
						you on an ad hoc basis at the following rates:
					</p>
					<h3>Non-contract rates</h3>
					<ul class="bullet">
						<li>
							Day Rate -
							{" " +
								process.env
									.NEXT_PUBLIC_COST_UNCONTRACTED_DAY_RATE +
								" "}
						</li>
						<li>
							Remote Support Session -
							{" " +
								process.env
									.NEXT_PUBLIC_COST_UNCONTRACTED_REMOTE_SUPPORT +
								" "}
						</li>
						<li>
							Initial Assessment -
							{" " +
								process.env
									.NEXT_PUBLIC_COST_INITIAL_ASSESSMENT +
								" "}
						</li>
					</ul>
				</ContentBoxMain>
			</section>

			<section className="standard-text">
				<h2>Support Contracts</h2>
				<h3>Every business's needs are different</h3>
				<p>
					We work to help support your business through its IT and Mac
					related issues, and provide ongoing support to keep you
					doing what you do best. If you want to take a plan with us
					for regular organised projects and ongoing support, or a one
					off office upgrade, we can help. We will work out a support
					plan that gives you the help you need at a cost that makes
					sense for you. We aim to be flexible, reliable and honest
					with our suggestions, and upfront with the expected costs.
				</p>
				<h3>How to start?</h3>
				<h4>Initial Assessment</h4>
				<p>
					This is where we aim to identify your pain points and areas
					of weakness, and then to suggest solutions. Historically
					this was a visit to the office, a walk and talk through what
					is causing issues and running diagnostic software or looking
					at logs where needed. These days this can be remote if
					required (via TeamViewer, or even teleconferencing apps like
					Zoom or FaceTime). This initial visit usually brings forth
					things that perhaps you weren't aware of - we regularly get
					scores of staff piping up with niggles and issues that are
					not life threatening, but that the end user wants to be
					resolved. This initial visit or consultation is
					{" " + process.env.NEXT_PUBLIC_COST_INITIAL_ASSESSMENT}.
				</p>
				<h4>Next Steps</h4>
				<p>
					An on-site assessment typically reveals two distinct
					(related but separate) requirements:
				</p>
				<ol type="i">
					<li>
						<h5>How much support do you need and how often?</h5>
						<p>
							This can be weekly check ins (work though a list of
							support questions or support tickets for a day or
							half-day a week). Or it can be monthly on-site
							visits to work through the issues in person. Or it
							can be ad hoc incidents during an agreed service
							window to deal with these one at a time. Or any
							combination that suits your needs.
						</p>
					</li>
					<li>
						<h5>Specific projects</h5>
						<p>Examples Include:</p>
						<ul class="bullet">
							<li>Upgrade Staff Macs.</li>
							<li>Migrate to new hardware.</li>
							<li>Install new fileshare.</li>
							<li>Network redesign.</li>
							<li>New WiFi infrastructure.</li>
							<li>Disaster Recovery Plan.</li>
							<li>Backup plan and implementation.</li>
						</ul>
						<p>
							Often everyone knows that the file server is
							starting to fail, that the backups are giving
							errors, or that every time the cleaner does the
							rounds he accidentally unplugs the router. Projects
							are often less time consuming or expensive than
							people think. Sometimes simple steps can have
							massive benefits. Very often upgrades, which were
							quoted in the thousands when everything was set up
							years ago, are now in the £100s (examples being
							things like Gigabit switches, 10G switches and LAGs
							to connect servers, and managed WiFi services).
							Making the cost saving in frustrating lost time very
							much worth the outlay. Investing in upgrades to
							existing computers (such as iMacs) can greatly
							increase productivity without the cost of replacing
							machines - with our services these upgrades can be
							done on-site to minimise downtime.
						</p>
					</li>
				</ol>
				<h3>Contracted rates</h3>
				<p>
					We want to help you find a plan that fits your budget and
					your needs. Once we've carried out an initial assessment, we
					will be able to give you options on contracted rates for
					support. The more support you need and are contacted for,
					the lower each day rate or incident cost will be. We find
					that once the initial issues are resolved and a plan is in
					place, the need for ongoing support reduces (until the next
					project starts or your needs change). Our plans are flexible
					to make sure you have everything you need without paying for
					things you don't. Contract plans are made to cover a minimum
					of 6 months with re-assessment periodically.
				</p>
			</section>
			<section>
				<ContentBoxMain
					title="Start Your Journey With Us"
					marginTop="0"
				>
					<p>
						We look forward to working with you and helping you and
						your business get the best possible return on your IT.
						To get started and book an initial assessment, give us a
						call on
						{" " + process.env.NEXT_PUBLIC_PHONE + " "}or send us an{" "}
						<span className="clickable" onClick={toggleContactForm}>
							email
						</span>
						.
					</p>
				</ContentBoxMain>
			</section>
			<PopupOverlay
				nodeRef={nodeRef}
				isOpen={isContactFormOpen}
				close={() => closeContactForm()}
			>
				<ContactForm closeContactForm={() => closeContactForm()} />
			</PopupOverlay>
		</Page>
	)
}
