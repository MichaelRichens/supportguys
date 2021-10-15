import ContentServices from "../components/content_components/ContentServices"
import Page from "../components/Page"

export default function services() {
	return (
		<Page
			title={"Services"}
			metaDescription="Support Guys bring two decades of Apple Mac experience to support our SME customers in ensuring your IT setup is resilient and trouble free."
		>
			<ContentServices onOwnPage={true} />
		</Page>
	)
}
