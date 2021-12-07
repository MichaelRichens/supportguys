import Link from "next/link"
import Image from "next/image"

import TextContactDetails from "./content_components/TextContactDetails"

import styles from "../styles/Footer.module.css"

import macupgrades_logo_small from "../public/images/logos/macupgrades_logo144x25.png"
import solderfix_logo_small from "../public/images/logos/solderfix_logo146x25.png"
import appcentre_logo_small from "../public/images/logos/appcentre_logo146x25.png"

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div>
				<section className={styles.contact}>
					<h3>
						<Link href="/contact_us">Contact Us</Link>
					</h3>
					<address>
						<TextContactDetails />
					</address>
				</section>
				<nav className={styles.brands}>
					<h3>Our Other Brands</h3>
					<ul>
						<li>
							<Link href="https://www.macupgrades.co.uk/store/">
								<a>
									<Image
										src={macupgrades_logo_small}
										width="144"
										height="25"
										alt="MacUpgrades"
										priority={true}
									/>
								</a>
							</Link>

							<p>
								Repair and Upgrades for Macintosh Computers
								since 2005, specialising in board level repairs
								and detailed compatibility guidance.
							</p>
						</li>
						<li>
							<Link href="https://www.appcentre.co.uk/softstore/">
								<a>
									<Image
										src={appcentre_logo_small}
										width="146"
										height="25"
										alt="AppCentre"
										priority={true}
									/>
								</a>
							</Link>

							<p>
								Supplying and supporting Kerio Connect
								mailserver and Control firewall, and other Kerio
								and GFI business software.
							</p>
						</li>
						<li>
							<Link href="https://www.solderfix.co.uk">
								<a>
									<Image
										src={solderfix_logo_small}
										width="146"
										height="25"
										alt="Solder Fix"
										priority={true}
									/>
								</a>
							</Link>
							<p>
								Soldering and Microsoldering repairs on a wide
								range of electronic and computer equipment.
							</p>
						</li>
					</ul>
				</nav>
			</div>
			<small className={styles["bottom-links"]}>
				<Link href="/privacy_policy">Privacy Policy</Link>
			</small>
			<small className={styles.copyright}>
				&copy;2021
				{currentYear > 2021 ? ` - ${currentYear} ` : " "}{" "}
				{process.env.NEXT_PUBLIC_NAME} is a trading division of
				MacUpgrades / Second Chance PC Ltd. Company number: 4331031.
				Registered for VAT: GB 783705210.
			</small>
		</footer>
	)
}
