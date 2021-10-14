import ContentBoxTitle from "../components/ContentBoxTitle"
import Page from "../components/Page"
import PageSection from "../components/PageSection"

export default function aboutus() {
	return (
		<Page
			title="About Us"
			metaDescription="Support Guys bring two decades of Apple Mac experience to support our SME customers in ensuring your IT setup is resilient and trouble free."
		>
			<PageSection backgroundImageUrl={"aboutus_image.png"}>
				<ContentBoxTitle marginTop="27%">
					<h1>About Support Guys</h1>
				</ContentBoxTitle>
			</PageSection>
		</Page>
	)
}
