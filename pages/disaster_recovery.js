// TODO get this rewritten in a way that doesn't obviously plagerise the top google result for DRP...

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
				<ul>
					<li>What if the office did burn down?</li>
					<li>What if a rogue employee tried to steal your data?</li>
					<li>What if you had a ransomware attack?</li>
					<li>What if the office floods?</li>
					<li>What if your staff can't get to the office?</li>
					<li>What if all your staff have to work from home?</li>
				</ul>
			</ServicePage>
		</Page>
	)
}
