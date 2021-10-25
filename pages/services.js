import ContentServices from "../components/content_components/ContentServices"
import Page from "../components/Page"

export default function services() {
	const currentYear = new Date().getFullYear()

	return (
		<Page
			title={"Services"}
			metaDescription={`Support Guys bring ${
				currentYear - 2001
			} years of Apple Mac experience to support our SME customers in ensuring your IT setup is resilient and trouble free.`}
		>
			<ContentServices onOwnPage={true} />
		</Page>
	)
}
