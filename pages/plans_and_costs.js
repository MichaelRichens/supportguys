// TODO think about the background image for this page, didn't have a good first impression when I first looked at the page...
// Looked like a mess of text all jumbled in with the title, and took a while to figure out wtf was going on with it.
// Maybe a picture of a happy accountant using a Mac or something? :)
// TODO we talk about how we are different and are up front about costs, then give the costs for non-contracted rates (also need to flag these as more than cotracted rates more)
// then we spend multiple paragraphs waffling, then our cotracted rates section basically says "it depends"
// I don't think we've justified the first paragraph about being different.
// Sort out above before continuing
import Page from "../components/Page"
import ContentBoxMain from "../components/ContentBoxMain"

import stylesMainPage from "../styles/stylesMainPage.module.css"

export default function plans_and_costs() {
	return (
		<Page title={""} metaDescription="">
			<section
				className={stylesMainPage["page-intro"]}
				style={{
					backgroundImage:
						"url(/images/backgrounds/plans_and_costs_image_placeholder.jpg)"
				}}
			>
				<ContentBoxMain
					title="Plans and Costs"
					marginLeft="auto"
					marginRight="10%"
					h1={true}
				>
					<p>TODO Intro paragraph.</p>
				</ContentBoxMain>
			</section>
			<section className="standard-text">
				<h2>Clear Upfront Pricing Information</h2>
				<h3>TODO - see notes in file about text content</h3>
			</section>
		</Page>
	)
}
