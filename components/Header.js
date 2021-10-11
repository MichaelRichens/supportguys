import Link from "next/link"

export default function Header() {
	return (
		<header>
			Header
			<nav>
				<Link href="/"><a>Home Page</a></Link>
				<Link href="/aboutus"><a>About Us</a></Link>
			</nav>
		</header>
	);
}