// TODO dougs input on new into box text

import ContentBoxMain from "../components/ContentBoxMain"
import Page from "../components/Page"
import FindOutMore from "../components/FindOutMore"

import TextAboutUsCambs from "../components/content_components/TextAboutUsCambs"
import ContentServices from "../components/content_components/ContentServices"

import styles from "../styles/index.module.css"
import stylesMainPage from "../styles/stylesMainPage.module.css"

export default function Home() {
	return (
		<Page
			title={process.env.NEXT_PUBLIC_NAME}
			metaDescription="Support Guys bring two decades of Apple Mac experience to support our SME customers in ensuring your IT setup is resilient and trouble free."
		>
			<section
				className={stylesMainPage["page-intro"]}
				style={{
					backgroundImage:
						"url(/images/backgrounds/homepage_image.jpg)"
				}}
			>
				<ContentBoxMain
					title="Tailored Mac Support for your Business"
					marginLeft="auto"
					marginRight="10%"
					h1={true}
				>
					<p>
						Support Guys provides expert Apple Mac focussed IT
						support to business customers. We have been supporting
						customers using Apple Mac computers for over
						{" " + (new Date().getFullYear() - 2001) + " "} years.
						We specialise in the world of Mac hardware, macOS and
						all associated technologies like WiFi networks,
						FileMaker servers, NAS solutions, and backups. We can
						assess, plan and improve your networks and
						infrastructure and the computers you use.
					</p>
					<FindOutMore href="/about_us" />
				</ContentBoxMain>
			</section>

			<section
				className={"text-over-image " + styles["home-page-about-us"]}
				style={{
					backgroundImage:
						"url(/images/backgrounds/cambridge_skyline.jpg)"
				}}
			>
				<h2>About Us</h2>
				<TextAboutUsCambs />
			</section>
			<ContentServices />
			<hr />
			<section className={styles["home-page-find-out-more"]}>
				<ContentBoxMain title="Ready to find out more?" marginTop="0">
					<p>
						Time for the next steps. Lets work together to identify
						ways we can help you resolve your IT and Mac problems
						and start a plan. Get in touch and we'll help you every
						step of the way. Whether you currently have a disaster,
						or are wanting to prevent one, our team will be there
						for your business.
					</p>
					<FindOutMore href="/contact_us" text="Contact Us Today" />
				</ContentBoxMain>
			</section>
		</Page>
	)
}
