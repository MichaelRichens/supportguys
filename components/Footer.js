import Link from "next/link"

export default function Footer() {
	return (
		<footer>
			<p>Footer</p>
			<nav>
				<Link href="/"><a>Home Page</a></Link>
				<Link href="/aboutus"><a>About Us</a></Link>
				<Link href="/contactus"><a>Contact Us</a></Link>
			</nav>
		</footer>
	);
}