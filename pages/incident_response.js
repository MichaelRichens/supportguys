//TODO don't like suggested image - still using placeholder

import Page from "../components/Page"
import ServicePage from "../components/ServicePage"

export default function incident_response() {
	return (
		<Page
			title="Incident Response"
			metaDescription="IT Incidents can occur to all businesses regardless of size and all businesses rely on sensitive data that would be damaging if comprised. We can help you plan to avoid the worst."
		>
			<ServicePage
				pageTitle="Incident Response"
				backgroundImage="/images/backgrounds/incident_response_image_placeholder.jpg"
				titleBoxWidth="50%"
			></ServicePage>
		</Page>
	)
}
