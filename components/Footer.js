// TODO More Social than just facebook

import Link from "next/link"
import Image from "next/image"

import TextContactDetails from "./content_components/TextContactDetails"

import styles from "../styles/Footer.module.css"

import macupgrades_logo_small from "../public/images/logos/macupgrades_logo144x25.png"
import appcentre_logo_small from "../public/images/logos/appcentre_logo146x25.png"
import facebook_logo_small_square from "../public/images/logos/facebook_logo25x25.png"

export default function Footer() {
	const current_year = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div>
				<section>
					<h3>
						<Link href="/contact_us">Contact Us</Link>
					</h3>
					<address className={styles.contact}>
						<TextContactDetails />
					</address>
				</section>
				<section className={styles.social}>
					<h3>Social</h3>
					<ul>
						<li>
							<Link href="https://www.facebook.com/SupportGuysUK/">
								<a>
									<Image
										src={facebook_logo_small_square}
										width="25"
										height="25"
										alt=""
									/>
									<span>Facebook</span>
								</a>
							</Link>
						</li>
					</ul>
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
										alt="MacUpgrades"
										priority={true}
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
										alt="AppCentre"
										priority={true}
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
			</div>
			<small className={styles["bottom-links"]}>
				<Link href="/privacy_policy">Privacy Policy</Link>
			</small>
			<small className={styles.copyright}>
				&copy;2021
				{current_year > 2021 ? ` - ${current_year} ` : " "}Support Guys
				is a trading division of MacUpgrades / Second Chance PC Ltd.
				Company number: 4331031. Registered for VAT: GB 783705210.
			</small>
		</footer>
	)
}
