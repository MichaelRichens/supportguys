import Link from "next/link"

import Page from "../components/Page"

export default function privacy_policy() {
	return (
		<Page title={"Privacy Policy"}>
			<article className="standard-text">
				<h1>Privacy Policy for Second Chance PC Ltd</h1>
				<section>
					<p>
						At Support Guys, accessible from www.supportguys.co.uk,
						one of our main priorities is the privacy of our
						visitors. This Privacy Policy document contains types of
						information that is collected and recorded by Support
						Guys and how we use it.
					</p>
				</section>
				<p>
					If you have additional questions or require more information
					about our Privacy Policy, do not hesitate to contact us. Our
					Privacy Policy was generated with the help of{" "}
					<Link href="https://www.gdprprivacynotice.com/">
						GDPR Privacy Policy Generator
					</Link>{" "}
					from GDPRPrivacyNotice.com .
				</p>
				<section>
					<h2>General Data Protection Regulation (GDPR)</h2>
					<p>We are a Data Controller of your information.</p>
					<p>
						Second Chance PC Ltd's legal basis for collecting and
						using the personal information described in this Privacy
						Policy depends on the Personal Information we collect
						and the specific context in which we collect the
						information:
					</p>
					<ul className="bullet">
						<li>
							Second Chance PC Ltd needs to perform a contract
							with you.
						</li>
						<li>
							You have given Second Chance PC Ltd permission to do
							so.
						</li>
						<li>
							Processing your personal information is in Second
							Chance PC Ltd legitimate interests.
						</li>
						<li>
							Second Chance PC Ltd needs to comply with the law.
						</li>
					</ul>
					<p>
						Second Chance PC Ltd will retain your personal
						information only for as long as is necessary for the
						purposes set out in this Privacy Policy. We will retain
						and use your information to the extent necessary to
						comply with our legal obligations, resolve disputes, and
						enforce our policies.
					</p>
					<p>
						If you are a resident of the European Economic Area
						(EEA), you have certain data protection rights. If you
						wish to be informed what Personal Information we hold
						about you and if you want it to be removed from our
						systems, please contact us.
					</p>
					<p>
						In certain circumstances, you have the following data
						protection rights:
					</p>
					<ul className="bullet">
						<li>
							The right to access, update or to delete the
							information we have on you.
						</li>
						<li>The right of rectification.</li>
						<li>The right to object.</li>
						<li>The right of restriction.</li>
						<li>The right to data portability.</li>
						<li>The right to withdraw consent.</li>
					</ul>
				</section>
				<section>
					<h2>Log Files</h2>

					<p>
						Support Guys follows a standard procedure of using log
						files. These files log visitors when they visit
						websites. All hosting companies do this and a part of
						hosting services' analytics. The information collected
						by log files include internet protocol (IP) addresses,
						browser type, Internet Service Provider (ISP), date and
						time stamp, referring/exit pages, and possibly the
						number of clicks. These are not linked to any
						information that is personally identifiable. The purpose
						of the information is for analysing trends,
						administering the site, tracking users' movement on the
						website, and gathering demographic information.
					</p>
				</section>
				<section>
					<h2>Website Analytics</h2>
					<p>
						We may also partner with selected third-party vendors,
						such as Google Analytics and others, to allow tracking
						technologies and remarketing services through the use of
						first party cookies and third-party cookies, to, among
						other things, analyze and track users' use of the
						website, determine the popularity of certain content and
						better understand online activity. By accessing the
						website, you consent to the collection and use of your
						information by these third-party vendors. You are
						encouraged to review their privacy policy and contact
						them directly for responses to your questions. We do not
						transfer personal information to these third-party
						vendors. However, if you do not want any information to
						be collected and used by tracking technologies, you can
						visit the third-party vendor or the{" "}
						<Link href="https://optout.networkadvertising.org/">
							Network Advertising Initiative Opt-Out Tool
						</Link>{" "}
						or{" "}
						<Link href="https://digitaladvertisingalliance.org/">
							Digital Advertising Alliance Opt-Out Tool
						</Link>
						.
					</p>
				</section>
				<section>
					<h2>Third Party Privacy Policies</h2>
					<p>
						Support Guys' Privacy Policy does not apply to other
						services or websites. Thus, we are advising you to
						consult the respective Privacy Policies of these
						third-party servers for more detailed information. It
						may include their practices and instructions about how
						to opt-out of certain options.
					</p>
					<p>
						You can choose to disable cookies through your
						individual browser options. To know more detailed
						information about cookie management with specific web
						browsers, it can be found at the browsers' respective
						websites.
					</p>
				</section>
				<section>
					<h2>Children's Information</h2>
					<p>
						Another part of our priority is adding protection for
						children while using the internet. We encourage parents
						and guardians to observe, participate in, and/or monitor
						and guide their online activity.
					</p>
					<p>
						Support Guys does not knowingly collect any Personal
						Identifiable Information from children under the age of
						13. If you think that your child provided this kind of
						information on our website, we strongly encourage you to
						contact us immediately and we will do our best efforts
						to promptly remove such information from our records.
					</p>
				</section>
				<section>
					<h2>Online Privacy Policy Only</h2>
					<p>
						Our Privacy Policy applies only to our online activities
						and is valid for visitors to our website with regards to
						the information that they shared and/or collect in
						Support Guys. This policy is not applicable to any
						information collected offline or via channels other than
						this website.
					</p>
				</section>
				<section>
					<h2>Consent</h2>
					<p>
						By using our website, you hereby consent to our Privacy
						Policy and agree to its terms.
					</p>
				</section>
			</article>
		</Page>
	)
}
