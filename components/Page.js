import Head from "next/head";
import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";

export default function Page(props) {
	const canonicalURL = process.env.NEXT_PUBLIC_DOMAIN + useRouter().pathname

	return (
		<>
			<Head>
				<title>Microsite{props.title && `: ${props.title}`}</title>
				{props.metaDescription && <meta name="description" content={props.metaDescription} />}
				<link rel="canonical" href={canonicalURL} />
			</Head>
			<Header />
			<main>
				{props.title && <h1>{props.title}</h1>}
				{props.children}
			</main>
			<Footer />
		</>
	);
}