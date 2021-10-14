import ContentBoxMain from "../components/ContentBoxMain"
import PageSection from "../components/PageSection"
import Page from "../components/Page"
import FindOutMore from "../components/FindOutMore"

export default function Home() {
	return (
		<Page
			title={process.env.NEXT_PUBLIC_NAME}
			metaDescription="Support Guys bring two decades of Apple Mac experience to support our SME customers in ensuring your IT setup is resilient and trouble free."
			className="index"
		>
			<PageSection backgroundImageUrl={"homepage_image.png"}>
				<ContentBoxMain title="Tailored Mac Support for your Business">
					<p>
						People used to say: "go and speak to those support guys;
						they will sort it all out for you." And we have, we do,
						and will continue to do so. We are three guys who have
						been supporting customers using Apple Mac computers for
						over
						{" " + (new Date().getFullYear() - 1999) + " "} years.
						We specialise in the world of Apple Mac hardware, macOS
						and all associated technologies like WiFi networks,
						Filemaker servers, NAS solutions, and backups.
					</p>
				</ContentBoxMain>
				<FindOutMore href="/about_us" />
			</PageSection>
		</Page>
	)
}
