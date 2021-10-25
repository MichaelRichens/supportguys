import Link from "next/link"

import Page from "../components/Page"
import ServicePage from "../components/ServicePage"

export default function backup_solutions() {
	const current_year = new Date().getFullYear()
	return (
		<Page
			title="Backup Solutions"
			metaDescription={`We provide Apple Mac specific, expert advice, on SME backup solutions and strategies. We can advise on on- and off-premises options with the benefit of ${
				current_year - 2001
			} years experience.`}
		>
			<ServicePage
				pageTitle="Backup Solutions"
				backgroundImage="/images/backgrounds/backup_solutions_image.jpg"
				titleBoxWidth="50%"
				imageBoxHeight="500"
			>
				<p>
					So... it's not the 90s anymore. Everyone knows they need a
					backup strategy - anything of value on your computer needs
					to be kept elsewhere as well. In business this is even more
					important - telling a client that their project is delayed
					because a hard drive failed or a laptop was dropped could
					mean losing that client.
				</p>
				<p>
					Backup solutions/strategy should consider a number of
					factors, not only the data security, but also the downtime
					or restore time to recover a mission critical device back to
					working order. People often don't think about backups in the
					right way. A backup is about getting yourself Back Up and
					running in the most appropriate amount of time. Thinking
					about accidental data loss, deliberate data loss, physical
					data loss, and how you will get to a position where work can
					be continued and delivered is key.
				</p>
				<p>
					Business needs vary widely. Some businesses need to be back
					up and running in hours. Some businesses need to be able to
					function uninterrupted even if the main office loses
					power/floods/burns down. How long could your business be
					without critical data, or a critical device?
				</p>
				<p>
					There is a staggering array of options to choose from; local
					network backups, local physical backups, cloud storage
					solutions, or dedicated storage solutions. Each have
					advantages and disadvantages. One system's weakness (for
					example the time needed to complete an offsite backup) can
					be compensated for by another's strength. And never forget
					the human factor. We have seen a strategy fail because the
					person who took home the backup hard drive left the company
					3 years ago and never brought it back...
				</p>
				<p>
					Cloud is a great solution (or as it should really be called,
					"someone else's computer") but if you have hundreds of
					gigabytes of data it could take days or even weeks to
					re-download from the cloud.
				</p>
				<p>
					Here at Support Guys we tend to recommend a combination of
					on-premises and cloud solutions, so that you can be up and
					running quicker in the event of a failure - however it's
					important to tailor a plan to your specific requirements.
					Looking at backup as a risk profile is important to
					understand which parts of the business are needed urgently,
					and protecting them accordingly, understanding the human
					risks as well as the IT system risks. This should form part
					of your{" "}
					<Link href="/disaster_recovery">
						Disaster Recovery Plan
					</Link>{" "}
					- often needed these days for any government contracts, bank
					loans, or certifications like Cyber Essentials or GDPR
					Compliance.
				</p>
				<p>
					In the Mac ecosystem using a Time Machine drive/server
					locally also gives you protection against accidentally
					deleted files, by keeping hourly snapshots of systems. Time
					Machine (if configured correctly) will also backup the
					system, applications and data (such as passwords in the
					keychain) meaning that in the event of a failure the system
					can be rebuilt in a timescale that will be short enough for
					many (though by no means all) use cases.
				</p>
				<p>
					We can deliver a strategy and support documentation to cover
					most risks; with costs outlined before implementation so you
					can rest easy, and get on with delivering what you are in
					business to do!
				</p>
				<p>
					We've been designing and deploying backup solutions for over{" "}
					{current_year - 2001} years, and the technology has changed
					a lot. If you have concerns over your data, get in touch to
					book in a consultation with one of our specialists.
				</p>
			</ServicePage>
		</Page>
	)
}
