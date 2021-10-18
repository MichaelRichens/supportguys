import Link from "next/link"

import TextContactDetails from "./content_components/TextContactDetails"

import styles from "../styles/Footer.module.css"

export default function Footer() {
	const current_year = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<section>
				<section className={styles.contact}>
					<h3>
						<Link href="/contactus">Contact Us</Link>
					</h3>
					<TextContactDetails />
				</section>
				<section>
					<h3>Social</h3>
				</section>
				<nav className={styles.contact}>
					<h3>Our Other Brands</h3>
					<dl>
						<dt>
							<Link href="https://www.macupgrades.co.uk/store/">
								MacUpgrades
							</Link>
						</dt>
						<dd>
							Repair and Upgrades for Macintosh Computers since
							2005, specialising in board level repairs and
							detailed compatability guidance.
						</dd>

						<dt>
							<Link href="https://www.appcentre.co.uk/softstore/">
								AppCentre
							</Link>
						</dt>
						<dd>
							Supplying and supporting Kerio Connect mailserver
							and Control firewall, and other Kerio and GFI
							business software.
						</dd>
					</dl>
				</nav>
			</section>
			<small className={styles.copyright}>
				&copy;2021
				{current_year > 2021 ? ` - ${current_year} ` : " "}Support Guys
				is a trading division of MacUpgrades / Second Chance PC Ltd.
				Company number: 4331031. Registered for VAT: GB 783705210.
			</small>
		</footer>
	)
}
