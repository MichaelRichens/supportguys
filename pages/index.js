import ContentBoxMain from "../components/ContentBoxMain"
import Page from "../components/Page"
import FindOutMore from "../components/FindOutMore"

import TextAboutUsOverview from "../components/content_components/TextAboutUsOverview"
import TextAboutUsCambs from "../components/content_components/TextAboutUsCambs"
import ContentServices from "../components/content_components/ContentServices"

export default function Home() {
	return (
		<Page
			title={process.env.NEXT_PUBLIC_NAME}
			metaDescription="Support Guys bring two decades of Apple Mac experience to support our SME customers in ensuring your IT setup is resilient and trouble free."
		>
			<section
				style={{
					backgroundImage: "url(/images/homepage_image.webp)"
				}}
			>
				<ContentBoxMain title="Tailored Mac Support for your Business">
					<TextAboutUsOverview />
				</ContentBoxMain>
			</section>
			<FindOutMore href="/aboutus" />
			<section
				className="text-over-image home-page-about-us"
				style={{
					backgroundImage: "url(/images/cambridge_skyline.webp)"
				}}
			>
				<h2>About Us</h2>
				<TextAboutUsCambs />
			</section>
			<ContentServices />
		</Page>
	)
}
