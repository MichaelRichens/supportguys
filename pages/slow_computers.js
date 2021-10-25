import Link from "next/link"

import Page from "../components/Page"
import ServicePage from "../components/ServicePage"

export default function slow_computers() {
	const current_year = new Date().getFullYear()

	return (
		<Page
			title="Computer Performance Upgrades"
			metaDescription={`Support Guys is the SME support arm of MacUpgrades, and has ${
				current_year - 2001
			} years experience in improving the performance of Apple Mac computers.`}
		>
			<ServicePage
				pageTitle="Slow Computers?"
				backgroundImage="/images/backgrounds/slow_computer_image.jpg"
				titleBoxWidth="50%"
				imageBoxHeight="450"
			>
				<p>
					One of the biggest bug bears we see here at Support Guys,
					are complaints about slow computers. It is important to work
					out the where, why, and how of these situations.
				</p>
				<p>
					Slow computers can be caused by software, networking or
					hardware problems - these are commonly known as bottlenecks;
					the slowest point which restricts the speed of the whole
					system. Bottlenecks can be very costly: 20 minutes a day
					lost to poor IT adds up to two working weeks lost a year
					(based on 220 days in the office - 73 hours a year waiting
					for your tools to work!).
				</p>
				<p>
					Once a problem has been pinned down to a computer problem,
					rather than a{" "}
					<Link href="/networking_and_wireless">network problem</Link>
					, there are common areas that need to be checked:
				</p>
				<ol>
					<li>
						<strong>Slow storage drive:</strong> This is super
						common - our sister site{" "}
						<Link href="https://www.macupgrades.co.uk/store/">
							MacUpgrades.co.uk
						</Link>{" "}
						upgrades many hundreds of these a year. The drive is
						where local data is stored, if the drive is slow then
						the computer is slow, no matter how powerful it is - a
						bit like having a Ferrari and putting skateboard wheels
						on it. This is usually exhibited as a prolonged initial
						loading screen and increasing instances (on Macs) of
						seeing the spinning wheel.
						<br />
						Particularly with Macs, up until about 2020 the models
						sold as standard office desktops often came with a hard
						drive as the base option. A hard drive is a moving
						mechanical part, and should be considered obsolete for
						this use (though it very much still has its place
						elsewhere). Not quick to begin with, over time it begins
						to slow down and degrade - eventually it will just stop.
						Sometimes this exhibits as slowly getting worse, other
						times they will just stop working. Upgrading these to
						SSDs (Solid State Drives) can give dramatic results, and
						mean putting off that hardware upgrade for a good few
						years. When visiting client sites, it is the most common
						issue we see.
						<br />
						Performing drive upgrades on Apple iMacs is a reasonably
						difficult job, but it is something we have a great deal
						of experience in, and we can come out to you if you have
						a quantity of machines that need upgrading.
					</li>
					<li>
						<strong>Lack of RAM:</strong> RAM (memory) is short term
						storage that the computer needs for its operations. A
						phrase we say many times every day to customers is
						"Adding more RAM won't speed up your computer, but not
						having enough will slow it down." Also how much RAM is
						needed depends on the operating system, and the tasks
						that being asked of your computer.
						<br />
						Usually Macs tend to last longer than PCs, and have a
						longer upgrade cycle. We see 10+ year old Macs in
						everyday useful service all the time. But as you upgrade
						the operating system and software, you place higher
						demands on the system, meaning the amount of RAM
						available from new is no longer enough.
						{current_year > 2022
							? " At the time of writing (2022), "
							: " "}
						8GB is the bare minimum for current Apple operating
						systems, 16GB is more ideal for general purpose use, and
						more demanding uses require more again. RAM can be
						relatively inexpensive to purchase, though if you have
						21.5" iMacs, annoyingly difficult to fit (we can help!).
					</li>
					<li>
						<strong>Malware:</strong> This covers a wide gamut of
						unwanted software, at the high end being malicious
						threats to your entire business network. More commonly
						they are simply unwanted programmes that primarily serve
						to monetise the users activity, such as serving adverts
						and pop-ups. This can interrupt normal internet activity
						and slow the computer down dramatically. Running an
						anti-malware scan can show whether this is an issue. We
						can help your business ensure this is on by default on
						all your machines, along with Antivirus.
					</li>
				</ol>
				<p>
					If your business is suffering from slowing Mac computers,
					book a consultation with our team today we can make a real
					difference to your employees productivity, without the
					expense of replacing an entire suite of machines.
				</p>
				<p>
					If you have an individual machine you want to upgrade or
					repair, try our{" "}
					<Link href="https://www.macupgrades.co.uk">
						MacUpgrades
					</Link>{" "}
					sister site for a wealth of machine specific information and
					upgrades.
				</p>
			</ServicePage>
		</Page>
	)
}
