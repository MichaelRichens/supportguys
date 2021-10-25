export default function TextAboutUsCambs() {
	const currentYear = new Date().getFullYear()

	return (
		<p>
			Based in the city of Cambridge, Support Guys is a trading division
			of MacUpgrades; a {" " + (currentYear - 2001) + " "}
			year veteran in Macintosh upgrades and repairs. Developed to support
			our SME customers, Support Guys are here to help ensure your
			business's IT setup is resilient and trouble free.
		</p>
	)
}
