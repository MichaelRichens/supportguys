//TODO don't like suggested image - still using placeholder
//TODO not really sure this sounds like we know what we are talking about (even less sure that we do...)
// Want doug to read it since he's the one who'll need to follow through on it.

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
				imageBoxHeight="500"
			>
				<p>
					Incident response is about making and having a plan before
					it is necessary to use it. Not limited to an IT only
					process, it is an essential business function that can allow
					quick decisions with reliable information. The IRP should
					involve all teams of the business to minimise loss.
				</p>
				<p>
					IT incidents can occur to all businesses regardless of size,
					and all businesses rely on sensitive data that would be
					damaging if comprised (such as customer records, contracts,
					pricing, and design information). Security incidents come in
					many types - here are some examples:
				</p>
				<ul class="bullet">
					<li>
						A disgruntled staff member changing passwords on
						important databases or accounts.
					</li>
					<li>
						Someone accidentally (or deliberately) deleting the
						whole file share from the server.
					</li>
					<li>
						Malware infection on a single machine exposing passwords
						for corporate email.
					</li>
					<li>
						Theft of company device with sensitive data or
						passwords.
					</li>
					<li>
						Discovery of an unidentified device on the corporate
						network.
					</li>
				</ul>
				<p>
					These can have both short- and long-term effects that could
					impact the success of the entire business. What is terminal
					for one business may pose no challenges to another.
				</p>
				<p>
					Incident response is a planned approach to addressing and
					dealing with the aftermath of a security breach or
					cyberattack. The goal is to resolve the issues to limit
					damage and reduce recovery time and costs. This is commonly
					known as an Incident Response Plan (IRP), which is a
					predetermined list of written instructions that outline the
					companies response to network security incidents and
					confirmed network breaches.
				</p>
				<p>
					Any security breach or cyber attack that is not contained
					and handled can explode into a larger problem, resulting in
					a damaging data breach, and large expense or systemic
					collapse. Responding to an incident quickly allows a
					business to mitigate the cause of the exposure, restore
					services, and reduce the risks that future incidents pose.
				</p>
				<p>
					Incident response enables you to be prepared for both the
					known and the unknown, and is a reliable method for
					identifying a security incident immediately when it occurs.
					Planning is essential to create a series of best practices
					to stop an intrusion before it gets further into the
					network.
				</p>
				<p>
					Additionally, security incidents can be hugely costly as
					businesses could face fines, legal fees and data recovery
					costs. It could also affect profitability as untreated
					incidents are correlated with lower brand reputation,
					customer loyalty and customer satisfaction.
				</p>
				<p>
					While you cannot eradicate incidents completely, incident
					response processes do help to reduce them. Focus should be
					on what can be done in advance to prepare for possible
					security incidents. Threats will always continue to exist,
					but a team can be prepared to prevent and respond to these
					attacks.
				</p>
				<p>
					An important part of incident response is defining the
					difference between a threat and a vulnerability. A threat is
					the potential of a bad actor, such as a hacker or dishonest
					employee, that is looking to exploit a vulnerability for
					financial gain or other motives. A vulnerability is a
					weakness in a computer system, business process, or user,
					that could be attacked by such a bad actor. Threats
					therefore exploit vulnerabilities, which creates business
					risk. The potential consequences include unauthorised access
					to sensitive information, identity theft, systems taken
					offline, adverse publicity, and legal and compliance
					violations.
				</p>
				<p>
					We hope this gives you an idea of the importance of incident
					response and having a plan in place for your business.
				</p>
				<p>
					No matter the size your business, we can help you work
					through your IT planning and help you to ensure your risks
					are mitigated and anticipated.
				</p>
				<p>
					Please get in touch if you would like to book a consultation
					to assess and build a plan for your business.
				</p>
			</ServicePage>
		</Page>
	)
}
