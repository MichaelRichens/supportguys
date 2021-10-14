import ContentBoxTitle from "../components/ContentBoxTitle"
import Page from "../components/Page"

import TextAboutUsOverview from "../components/text_components/TextAboutUsOverview"

export default function aboutus() {
	return (
		<Page
			title="About Us"
			metaDescription="Support Guys bring two decades of Apple Mac experience to support our SME customers in ensuring your IT setup is resilient and trouble free."
		>
			<section
				style={{
					backgroundImage: "url(/images/aboutus_image.png)"
				}}
			>
				<ContentBoxTitle marginTop="27%">
					<h1>About Support Guys</h1>
				</ContentBoxTitle>
			</section>
			<section className="standard-text">
				<h2>Location and working Areas</h2>
				<p>
					Based in the city of Cambridge, Support Guys are a trading
					division of MacUpgrades; a{" "}
					{" " + (new Date().getFullYear() - 2001) + " "} year veteran
					in Macintosh upgrades and repairs. Developed to support our
					SME customers, Support Guys are here to help ensure your
					business's IT setup is resilient and trouble free.
				</p>
				<p>
					Support Guys works with customers, usually within an area of
					2 hours travel from our Cambridge location, although we have
					gone the length and breadth of the country to our clients
					sites. Remote support is available to all customers where
					phyiscal access is not required.
				</p>
			</section>
			<section className="standard-text">
				<h2>Focus and Specialties</h2>
				<TextAboutUsOverview />
				<p>
					We tend to focus on the user, the person doing the work and
					look for bottlenecks which get in the way. This usually
					starts with a lot of questions about what is causing you
					pain, and trying and work through them to deliver a complete
					solution.
				</p>
				<p>
					Often these are obvious, sometimes they are not. Questions
					about email being slow can be underlying network issues
					(DNS, Broadband connection failure, too many hubs, old or
					damaged cables). It could be client issues (software out of
					date, corrupted email databases, malware or PUPs getting in
					the way). However it can also be about training and
					understanding how to interact with these things in the best
					way possible; using email to send out large files like
					architectural drawings is easy - but slow and insecure.
					Better solutions exist today.
				</p>
			</section>
			<section className="standard-text">
				<h2>Time critical response</h2>
				<p>
					Sometimes we deal with things that are much more time
					critical...
				</p>
				<p>
					Issues that have been going on for months / years -
					everything has been so busy that there has not been time to
					review your backup strategy. New devices have just been
					bolted into place as and when, and it all kinda just works -
					until a power cut and it then just stops. You need to get
					back up and running as soon as possible. You need to know
					what is wrong and how to fix it.
				</p>
				<p>
					Maybe someone’s computer has fallen over and now you realise
					that you need to get them all fixed and backing up?
				</p>
				<p>
					Maybe you now have 10 people working from home and need to
					think about how to keep all that communication safe and
					secure (more secure than WhatsApp or email).
				</p>
				<p>
					Sometimes you need a detailed disaster recovery plan for a
					business proposal, or to update one as new risks have
					emerged
					{new Date().getFullYear() <= 2022
						? ` (such as a global pandemic${
								new Date().getFullYear() <= 2021
									? " or no one able to get into the office as their cars have no petrol!)"
									: "!)"
						  }`
						: ""}
					.
				</p>
				<p>
					Hindsight is a wonderful thing - but proactive planning is
					even better...
				</p>
				<p>
					Wether you are planning for the future or need help now, we
					at Support Guys can help.
				</p>
			</section>
		</Page>
	)
}
