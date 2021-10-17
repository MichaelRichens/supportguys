import Page from "../components/Page"
import ContentPage from "../components/ContentPage"

export default function disaster_recovery() {
	const current_year = new Date().getFullYear()
	return (
		<Page
			title={"Disaster Recovery"}
			metaDescription={`Mac focussed disaster planning and general support for SMEs, from Cambridge based Support Guys, Mac experts with ${
				current_year - 2001
			} years experience.`}
		>
			<ContentPage
				pageTitle="Disaster Recovery"
				backgroundImage="/images/backgrounds/disaster_recovery_image_placeholder.jpg"
			>
				<section>
					<p>
						Yes, its quite unlikely that your office will burn down.
						But as your business grows and expands a disaster
						recovery plan becomes more important.
					</p>
				</section>
			</ContentPage>
		</Page>
	)
}
