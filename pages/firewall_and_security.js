// TODO is "firewall" sigular or plural (in titles)
import Link from "next/link"

import Page from "../components/Page"
import ServicePage from "../components/ServicePage"

export default function firewall_and_security() {
	return (
		<Page
			title={"Firewall and Network Security"}
			metaDescription="Support Guys are a GFI Gold reseller, and provide experienced installation and support of Kerio Control firewalls to SME customers."
		>
			<ServicePage
				pageTitle="Firewall and Network Security"
				backgroundImage="/images/backgrounds/firewall_and_security_image_placeholder.jpg"
				titleBoxWidth="65%"
			>
				<p>
					A firewall is the front door to your network, your first
					line of defence against threats to your network and data.
					Like a door, there are many types and many options.
					Certainly in today's climate, businesses need to ensure that
					customer and company data is protected by as many layers of
					protection as possible, guaranteeing all traffic is logged
					and trackable. GDPR regulations put the onus on businesses
					to protect customer data, so a firewall is essential for
					where Personally Identifiable Information is stored.
				</p>
				<p>
					Support Guys are a GFI Gold reseller and we recommend and
					install Kerio Control firewalls in what is known as a
					"Unified Threat Management" system - which can deliver next
					generation firewall controls and responses to keep your
					network safe. They have a centralised web interface, making
					configuration and visibility for your network very simple.
					Easy to understand rules and human readable logs show you
					what is going on, with integrated Antivirus to reduce your
					exposure to viruses.
				</p>
				<ul className="bullet">
					<li>
						Configure your firewall with easy-to-use traffic rules,
						controlling inbound and outbound communications by URL,
						application, traffic type, and more.
					</li>
					<li>
						Intrusion detection and prevention using the Snort
						system, which constantly monitors inbound and outbound
						network communications for suspicious activity. Log or
						block the communications depending on severity.
					</li>
					<li>
						Prevent viruses, worms, Trojans and spyware from
						operating on your network. Kerio Control goes beyond
						just checking files for malicious code; it scans your
						network traffic for potential attacks.
					</li>
				</ul>
				<p>
					A decent firewall can help you prevent phishing scams,
					malware attacks and even stop some ransomware.
				</p>
				<p>
					With work from home now more prevalent, implementing a VPN
					(virtual private network) through your firewall will allow
					staff to access needed resources. With home machines being
					used, its more essential than ever to ensure your network
					and data is safe.
				</p>
				<p>
					If you would like to find out more about firewalls and how
					we can help secure your businesses network, please{" "}
					<Link href="/contactus">get in touch</Link> to arrange a
					consultation and networking review.
				</p>
			</ServicePage>
		</Page>
	)
}
