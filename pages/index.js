import Page from "../components/Page"

import background_image from "../public/images/homepage_image.png"

export default function Home() {
	return (
		<Page
			title={process.env.NEXT_PUBLIC_NAME}
			metaDescription="Support Guys bring two decades of Apple Mac experience to support our SME customers in ensuring your IT setup is resilient and trouble free."
			backgroundImageUrl={"homepage_image.png"}
			className="index"
		>
			<div className="content-box content-box-main">
				<h1>Tailored Mac Support for your Business</h1>
				<div className="text-container-with-line-decorator">
					<div className="decorator"></div>
					<p className="text">
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
				</div>
			</div>
		</Page>
	)
}
