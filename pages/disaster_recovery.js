import Page from "../components/Page"
import ServicePage from "../components/ServicePage"

export default function disaster_recovery() {
	const current_year = new Date().getFullYear()
	return (
		<Page
			title={"Disaster Recovery"}
			metaDescription={`Mac focussed disaster planning and general support for SMEs, from Cambridge based Support Guys, Mac experts with ${
				current_year - 2001
			} years experience.`}
		>
			<ServicePage
				pageTitle="Disaster Recovery"
				backgroundImage="/images/backgrounds/disaster_recovery_image_placeholder.jpg"
				imageBoxHeight="300px"
				titleBoxHeight="150px"
				titleBoxWidth="50%"
			>
				<p>
					Yes, its quite unlikely that your office will burn down. But
					as your business grows and expands a disaster recovery plan
					becomes more important.
				</p>
			</ServicePage>
		</Page>
	)
}
