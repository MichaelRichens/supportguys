import Page from "../components/Page"
import ServicePage from "../components/ServicePage"

export default function disaster_recovery() {
	const current_year = new Date().getFullYear()
	return (
		<Page
			title={"Disaster Recovery"}
			metaDescription={`Mac focussed disaster planning and general support for SMEs, from Cambridge based Support Guys, Mac experts with ${
				current_year - 2001
			} years experience.`}
		>
			<ServicePage
				pageTitle="Disaster Recovery"
				backgroundImage="/images/backgrounds/disaster_recovery_image.jpg"
				titleBoxWidth="50%"
				imageBoxHeight="500"
			>
				<p>
					Yes, its quite unlikely that your office will burn down. But
					as your business grows and expands a Disaster Recovery Plan
					becomes more important.
				</p>
				<ul>
					<li>What if the office did burn down?</li>
					<li>What if a rogue employee tried to steal your data?</li>
					<li>What if you had a ransomware attack?</li>
					<li>What if the office floods?</li>
					<li>What if your staff can't get to the office?</li>
					<li>
						What if all your staff have to work from home
						{current_year < 2023 ? " due to a global pandemic" : ""}
						?
					</li>
				</ul>
				<p>
					A disaster recovery plan addresses a wide range of possible
					adverse incidents, from network compromise or an office
					fire, to pandemics and natural disasters. How should your
					business cope with these things? A clear and well thought
					out Disaster Recovery Plan can ensure your business has
					minimum downtime, and as part of a Business Continuity Plan
					plot a path back to normality from a wide range of
					disruptive scenarios.
				</p>
				<p>
					Making such a plan will allow your staff/team members to be
					able to get back and running after an unplanned incident. A
					step by step plan allows you to focus your team on the
					critical aspects of the business and how to restore these
					systems quickly.
				</p>
				<p>
					In making these plans we will help you analyse your business
					processes and identify the IT infrastructure areas of your
					business that are mission critical, and any weaknesses you
					may have in these areas. Dependent on the business, it may
					be worthwhile to do a business impact analysis or a risk
					analysis to determine the main objects of recovery.
				</p>
				<p>
					Part of the plan will involve identifying and prioritising
					which members of staff are responsible for each step of the
					plan, and to make sure that each member of the team can be
					as productive and efficient as possible in bringing systems
					back up, inline with the business' priorities.
				</p>
				<p>
					Contact our experts today to develop your disaster recovery
					plan to cover you should the worst happen to your business.
				</p>
			</ServicePage>
		</Page>
	)
}
