import ContentBoxShadowed from "../ContentBoxShadowed"

import styles from "../../styles/ContentServices.module.css"

export default function ContentServices(props) {
	return (
		<section className={styles["services"]}>
			<section className={styles["top_info"]}>
				{props.onOwnPage ? (
					<h1>Our Services</h1>
				) : (
					<h2>Our Services</h2>
				)}
				<p>
					Sometimes we all need some Support. We aim to help you get
					the most from your IT infrastructure and devices, and give
					you the time and confidence to do what you do best. Here are
					some of the many areas in which we can help your business.
				</p>
			</section>
			<section
				className={"content-box-group " + styles["services-overview"]}
			>
				<ContentBoxShadowed moroInfoHref="/disaster_recovery">
					<h3>Disaster Recovery</h3>
					<p>
						Being prepared for the worst is essential in business.
						How could you recover from theft, data loss or a fire?
						We can help develop and implement a plan for if the
						worst happens.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed moroInfoHref="/networking_and_wireless">
					<h3>Networking and Wireless</h3>
					<p>
						Networks get expanded as your business grows, new
						devices are added, then suddenly a problem. Analysis and
						simplifying your network can remove bottlenecks and
						improve performance.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed moroInfoHref="/firewall_and_security">
					<h3>Firewalls and Security</h3>
					<p>
						A firewall is like your front door, it keeps your
						network safe from attack. A dedicated firewall gives
						your business control, and logging of what goes in and
						our of your network. We can help with planning and
						deployment.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed moroInfoHref="/incident_response">
					<h3>Incident Response</h3>
					<p>
						An incident response plan is a documented, written plan
						to deal with a cybersecurity incident like a data breach
						or cyber attack. Properly creating and managing an
						incident response plan involves regular updates and
						training.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed moroInfoHref="/backup_solutions">
					<h3>Backup Solutions</h3>
					<p>
						We all know that our data must be backed up, but how
						where and when? We can help you form a concise and
						planned backup strategy. Utilisiing the best of on-prem
						and cloud solutions, making sure your data is safe.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed moroInfoHref="/slow_computers">
					<h3>Slow Computers?</h3>
					<p>
						Is Jane asking why Word takes 5 minutes to open a small
						document? How much productivity is lost to waiting and
						watching the spinning wheel? We can help with assessing
						your Macs to ensure your staff are not held back by slow
						hardware.
					</p>
				</ContentBoxShadowed>
			</section>
		</section>
	)
}
