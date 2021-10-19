// TODO run the top text box past someone - made it up because I needed something to fill the space...
// TODO can't find proper image for this page - still using placeholder
// TODO see comments inline for things that need clarification
// TODO once fixed issues, get Doug to read it through - I don't understand a lot of it and have edited a fair bit

import Page from "../components/Page"
import ContentBoxMain from "../components/ContentBoxMain"

import stylesMainPage from "../styles/stylesMainPage.module.css"

export default function case_studies() {
	return (
		<Page
			title={"Case Studies"}
			metaDescription="Support Guys provide Mac focussed IT support to a variety of SME and other clients, helping with networking, disaster planning, and hardware upgrades."
		>
			<section
				className={stylesMainPage["page-intro"]}
				style={{
					backgroundImage:
						"url(/images/backgrounds/case_studies_image_placeholder.jpg)"
				}}
			>
				<ContentBoxMain
					title="Case Studies / Previous Work"
					marginLeft="10%"
					h1={true}
				>
					<p>
						Some examples of previous work we have done with a range
						of different clients with very different needs. Every
						business's needs are different. We are here to work with
						you; to solve problems that you have, so you can get on
						with running your business.
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
					Customer called as their PC server had suffered a
					catastrophic hard drive failure, and their associated PCs
					had stopped working as they were all bound to the Active
					Directory Domain.
				</p>
				{/*TODO I cannot figure out what is going on in the below sentence after "hardware and" */}
				<p>
					The previous support company (which they were paying a
					substantial amount per month) now wanted a large amount to
					replace the hardware and reinforcing the service let down
					they were not even aware of the years of problems being
					reported before the fall over.
				</p>
				<p>
					{/* TODO from "Setting up and implementing a VPN" this needs to be spaced out a bit - 
					feels like paragraph transitions to bullet points not sentences */}
					We were able to supply and install a number of Macs with
					upgraded hard drives and max RAM to run their massive
					spreadsheets and technical documents. Replacing their Domain
					controller with a Mac running macOS Server gave them
					visibility of their backups and data use, and allowed cloud
					backups. Setting up and implementing a VPN for work from
					home staff. Continuing support over the years for small
					niggles and eventually upgrades 5 years later.
				</p>
			</section>
			<section className="standard-text">
				<h2>Education - Music Production Labs</h2>
				<h3 className="subheading">
					Client: Large secondary school Music department, with
					limited hardware support.
				</h3>
				{/* "The kids were learning and so speed is not a bottleneck." - don't understand this sentence, is it meant to sat it was a bottleneck.  
				If not, probably just replace it with things that actually were problems... */}
				<p>
					A customer called about a single project, replacing the hard
					drives on more than 20 iMac 2012 computers. These did
					everything the school needed as they were used for entry
					level lessons in Logic, Garageband and Motion. The kids were
					learning and so speed is not a bottleneck. These were imaged
					each term as the classes moved around, but the hard drives
					were starting to fail and so the imaging was taking longer
					and longer, and the Macs were getting less use as they were
					frustrating everyone taking 5 mins to boot at the start of a
					lesson.
				</p>
				<p>
					These were completed in 3 days onsite. We replaced the hard
					drives with small SSDs. This reduced their boot times to 10
					seconds, making the machines excellent tools for the
					students needs.
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
