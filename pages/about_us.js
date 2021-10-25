import Link from "next/link"

import ContentBoxMain from "../components/ContentBoxMain"
import Page from "../components/Page"

import TextAboutUsCambs from "../components/content_components/TextAboutUsCambs"

import stylesMainPage from "../styles/stylesMainPage.module.css"

export default function about_us() {
	const current_year = new Date().getFullYear()

	return (
		<Page
			title="About Us"
			metaDescription="Support Guys bring two decades of Apple Mac experience to support our SME customers in ensuring your IT setup is resilient and trouble free."
		>
			<section
				className={stylesMainPage["page-intro"]}
				style={{
					backgroundImage:
						"url(/images/backgrounds/cambridge_skyline.jpg)"
				}}
			>
				<ContentBoxMain
					title="About Support Guys"
					marginLeft="2%"
					marginRight="auto"
					h1={true}
					decoratorRight={true}
				>
					<TextAboutUsCambs />
				</ContentBoxMain>
			</section>
			<section className="standard-text">
				<h2>Location and working Areas</h2>
				<p>
					Support Guys works with customers, usually within an area of
					2 hours travel from our Cambridge location, although we have
					gone the length and breadth of the country to our clients'
					sites. Remote support is available to all customers where
					physical access is not required.
				</p>
			</section>
			<section className="standard-text">
				<h2>Focus and Specialties</h2>
				<p>
					Support Guys grew out of{" "}
					<Link href="https://www.macupgrades.co.uk/store/">
						MacUpgrades
					</Link>
					, which provides Apple Mac repairs and upgrades on a retail
					basis. Over the years, our relationships with some of our
					business customers evolved into a more that of a traditional
					IT support provider, with us handling everything to major
					network upgrades to printer configuration - "Go and speak to
					those support guys; they will sort it all out for you." And
					we have, we do, and will continue to do so.
				</p>
				<p>
					We are a small company that has been supporting customers
					using Apple Mac computers for over
					{" " + (new Date().getFullYear() - 2001) + " "} years. We
					specialise in the world of Mac hardware, macOS and all
					associated technologies like WiFi networks, Filemaker
					servers, NAS solutions, and backups. We can assess, plan and
					improve your networks and infrastructure and the computers
					you use.
				</p>
				<p>
					We tend to focus on the user, the person doing the work and
					look for bottlenecks which get in the way. This usually
					starts with a lot of questions about what is causing you
					pain, and trying and work through them to deliver a complete
					solution.
				</p>
				<p>
					Often these are obvious, sometimes they are not. Questions
					about email being slow can be underlying network issues
					(DNS, Broadband connection failure, too many hubs, old or
					damaged cables). It could be client issues (software out of
					date, corrupted email databases, malware or PUPs getting in
					the way). However it can also be about training and
					understanding how to interact with these things in the best
					way possible; using email to send out large files like
					architectural drawings is easy - but slow and insecure.
					Better solutions exist today.
				</p>
			</section>
			<section className="standard-text">
				<h2>Time critical response</h2>
				<p>
					Sometimes we deal with things that are much more time
					critical...
				</p>
				<p>
					Issues that have been going on for months / years -
					everything has been so busy that there has not been time to
					review your backup strategy. New devices have just been
					bolted into place as and when, and it all kinda just works -
					until a power cut and it then just stops. You need to get
					back up and running as soon as possible. You need to know
					what is wrong and how to fix it.
				</p>
				<p>
					Maybe someone’s computer has fallen over and now you realise
					that you need to get them all fixed and backing up?
				</p>
				<p>
					Maybe you now have 10 people working from home and need to
					think about how to keep all that communication safe and
					secure (more secure than WhatsApp or email).
				</p>
				<p>
					Sometimes you need a detailed disaster recovery plan for a
					business proposal, or to update one as new risks have
					emerged
					{current_year <= 2022
						? ` (such as a global pandemic${
								current_year <= 2021
									? ", or no one able to get into the office as their cars have no petrol!)"
									: "!)"
						  }`
						: "."}
				</p>
				<p>
					Hindsight is a wonderful thing - but proactive planning is
					even better...
				</p>
				<p>
					Whether you are planning for the future or need help now, we
					at Support Guys can help.
				</p>
			</section>
			<section className="standard-text">
				<h2>Next Steps</h2>
				<p>
					Just <Link href="/contact_us">get in touch</Link> with our
					team to begin the process.
				</p>
				<p>
					Initial Assessment: historically this was a visit to your
					site, walk and talk through what is causing you issues.
					These days this can be remote if needed (via Teamviewer, or
					even apps like Zoom or FaceTime)
				</p>
				<p>
					A usual assessment reveals two distinct (related but
					separate) requirements:
				</p>
				<ol type="i">
					<li>How much support do you need and how often.</li>

					<li>
						Very specific projects; expected costs and timelines.
					</li>
				</ol>
				<p>
					We are here to help every step through the journey. We look
					forward to working with you.
				</p>
			</section>
		</Page>
	)
}
