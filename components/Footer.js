// TODO Social section

import Link from "next/link"
import Image from "next/image"

import TextContactDetails from "./content_components/TextContactDetails"

import styles from "../styles/Footer.module.css"

import macupgrades_logo_small from "../public/images/logos/macupgrades_logo144x25.png"
import appcentre_logo_small from "../public/images/logos/appcentre_logo146x25.png"

export default function Footer() {
	const current_year = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<section>
				<section className={styles.contact}>
					<h3>
						<Link href="/contact_us">Contact Us</Link>
					</h3>
					<TextContactDetails />
				</section>
				<section>
					<h3>Social</h3>
				</section>
				<nav className={styles.contact}>
					<h3>Our Other Brands</h3>
					<dl>
						<dt className={styles.logo}>
							<Link href="https://www.macupgrades.co.uk/store/">
								<a>
									<Image
										src={macupgrades_logo_small}
										width="144"
										height="25"
									/>
								</a>
							</Link>
						</dt>
						<dd>
							Repair and Upgrades for Macintosh Computers since
							2005, specialising in board level repairs and
							detailed compatibility guidance.
						</dd>

						<dt className={styles.logo}>
							<Link href="https://www.appcentre.co.uk/softstore/">
								<a>
									<Image
										src={appcentre_logo_small}
										width="146"
										height="25"
									/>
								</a>
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
