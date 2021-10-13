import Image from "next/image"
import Link from "next/link"

import logo from "../public/images/support_guys_logo620x100.png"

export default function Header() {
	return (
		<header>
			<div className="logo-container">
				<Link href="/">
					<Image src={logo} quality="100" className="logo" />
				</Link>
			</div>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/contactus">
					<a>Contact</a>
				</Link>
				<Link href="/aboutus">
					<a>About Us</a>
				</Link>
				<Link href="/services">
					<a>Services</a>
				</Link>
				<Link href="/case_studies">
					<a>Case Studies</a>
				</Link>
				<Link href="/pricing">
					<a>Plans and Costs</a>
				</Link>
				<Link href="/whats_this_for">
					<a className="urgent">Support Now!</a>
				</Link>
				<Link href="/ticket">
					<a>Tickets</a>
				</Link>
			</nav>
		</header>
	)
}
