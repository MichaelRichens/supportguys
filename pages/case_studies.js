//TODO Doug should read over last 2 case studies

import Page from "../components/Page"
import ContentBoxMain from "../components/ContentBoxMain"

import stylesMainPage from "../styles/stylesMainPage.module.css"

export default function case_studies() {
	return (
		<Page
			title={"Case Studies"}
			metaDescription="Support Guys provide Mac focused IT support to a variety of SME and other clients, helping with networking, disaster planning, and hardware upgrades."
		>
			<section
				className={stylesMainPage["page-intro"]}
				style={{
					backgroundImage:
						"url(/images/backgrounds/case_studies_image.jpg)"
				}}
			>
				<ContentBoxMain
					title="Case Studies / Previous Work"
					marginLeft="10%"
					h1={true}
					decoratorRight={true}
				>
					<p>
						Some examples of previous work we have done with a range
						of clients with very different needs. Every business's
						needs are unique. We are here to work with you; to solve
						problems that you have, so you can get on with running
						your business.
					</p>
				</ContentBoxMain>
			</section>
			<section className="standard-text">
				<h2>Packaging Producer</h2>
				<h3 className="subheading">
					Client: Industrial-scale design and print, highly downtime
					sensitive.
				</h3>
				<p>
					The customer had undertaken the replacement of their old VPN
					connecting their two sites, as the central database was
					running slowly for the remote users. They had installed a
					short haul data service (SHDS), which had been left as raw
					SFP sockets, with the supplier telling them "it's all
					working; over to you!" They engaged us to take it from
					there.
				</p>
				<p>
					We configured the connection for their needs, but the
					performance was not what was hoped for. A continuing niggle
					was their database server, which was running slowly on
					client machines - lots of end users reporting massive delays
					on changing layouts and general use, which the database
					designer could not fathom as everything was optimised on the
					server. Since this had been the driving force behind fitting
					the SHDS, the client was understandably eager to resolve the
					issue.
				</p>
				<p>
					A full site inspection revealed that hubs and switches were
					scattered throughout the factory. Structured cabling was in
					place, but a lack of understanding of topography meant it
					was not used. Bottlenecks were all over the place as all the
					servers were connected to a single 1G connection to the main
					switch.
				</p>
				<p>
					Replacing the switches with larger, managed switches meant
					that each Mac could have its own connection. It also allowed
					the use of Link Aggregation (LAG) to increase the bandwidth
					to the servers and dramatically improve the end user
					experience.
				</p>
				<p>
					Replacing the routers with modern ones improved the remote
					site experience too, similar to the local one.
				</p>
				<p>
					Demand for reliable WiFi was made and implemented using
					Ubiquiti Access Points, making the WiFi reliable and able to
					cope with increased demand.
				</p>
				<p>
					During our time on site other problem areas became apparent.
					Several Macs were running very very slowly, as their hard
					drives were failing. A couple of mission critical Macs
					(which were running Parallels for specific software which is
					only available in Windows) were woefully under specified in
					RAM and also had failing hard drives. These were upgraded;
					suitably sized SSDs, and enough RAM to run a virtualised OS
					and the required software, were installed. Data was migrated
					onto the new drives with minimal downtime.
				</p>
				<p>
					This has been a year long iteration to uncover and counter
					several deep rooted bottlenecks. The client now has a
					managed network, Macs which are running smoothly, and a
					database which gives them the benefits they need to deliver
					to their customers.
				</p>
			</section>
			<section className="standard-text">
				<h2>Air Conditioning Specialists</h2>
				<h3 className="subheading">
					Client: Small, specialised, technical services.
				</h3>
				<p>
					Initially the customer called as their PC server had
					suffered a ransomware attack, the networked PCs had all been
					infected, and the backup hard drive had suffered
					catastrophic hardware failure. A company specialising in
					data recovery had managed to get most of their data from the
					backup drive, but the customer needed to get back up and
					running as soon as possible, and was at a loss at how to do
					so.
				</p>
				<p>
					Their previous support company (which they were paying a
					substantial amount per month) now wanted a large amount of
					labour to replace the hardware and set up again, whilst
					claiming to be unaware of the years of problems the client
					had reported to them before the failure. Once recovery was
					complete, it was apparent that the backup had not been
					working correctly for some time. Large amounts of time,
					effort and expense were required to get all their data back,
					resulting in downtime, lost income and upset on all parts.
				</p>
				<p>
					We were able to supply and install a number of Macs, with
					upgraded hard drives and max RAM; to run their massive
					spreadsheets, detailed technical documents, and invoicing
					system. Replacing their PC fileserver with a Mac running
					macOS Server gave them visibility of their backups and data
					use, and allowed cloud backups. We set up active monitoring
					tools, and remote access to assist when problems occurred.
					We were able to provide peace of mind with regular checks on
					the state of their backups and the locations of their data,
					and agreed alerts and actions if the age of the backups
					breached specific conditions.
				</p>
				<p>
					We have also set up and implemented a VPN for work from home
					staff, and have provided continuing support over several
					years for issues as small as setting up new printers, to
					working with them to create a complete strategy for a recent
					computer upgrade cycle; to minimise downtime, and work
					around holidays, staff illness and remote locations.
				</p>
			</section>
			<section className="standard-text">
				<h2>Education - Music Production Labs</h2>
				<h3 className="subheading">
					Client: Large secondary school Music department, with
					limited hardware support.
				</h3>
				<p>
					A customer called about a single project, upgrading or
					repairing more than 20 iMacs (older, slim style). Their IT
					support staff were unable to deal with the hardware, but had
					suggested that the Macs were failing somehow or just not up
					to the task. As a school with budget pressures, replacing
					the entire suite of machines was not something they were in
					a position to pursue.
				</p>
				<p>
					The iMacs were used for entry level lessons in Logic,
					GarageBand and Motion. The students were very
					beginner-level, and the Macs should have been adequate for
					running the software for the tasks they required. However
					boot up times were extremely slow, frustrating students. The
					Macs were imaged each term as the classes moved around, and
					this was taking longer and longer, frustrating staff. The
					Macs were seeing less and less use, and the school wanted to
					solve the issue.
				</p>
				<p>
					The customer called us to discuss the situation, and we
					provided remote support. It was confirmed that the hard
					drives were running very slowly and having a significant
					impact on the overall performance. We provided a fixed cost
					quote to come out on-site and replace the hard drives with
					Solid State Drives (SSDs), and we were able to go ahead with
					the short lead time required to fit around term dates.
				</p>
				<p>
					The upgrades were completed in 3 days on-site. The resulting
					performance improvement reduced their boot times to 10
					seconds, allowed the applications they were using to startup
					nearly instantly, and returning the machines to being
					excellent tools for the students needs.
				</p>
			</section>
			<section className="standard-text">
				<h2>Conclusion</h2>
				<p>
					Whether it be a one off single project, or the beginning of
					a long lasting support contract, we at Support Guys are here
					for you. Our aim is to make your IT work for you so you can
					concentrate on what you do best. Please get in touch to see
					how we can help.
				</p>
			</section>
		</Page>
	)
}
