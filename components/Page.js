import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

export default function Page(props) {
	return (
		<>
			<Head>
				<title>Microsite: {props.title}</title>
			</Head>
			<Header />
			<main>
				<h1>{props.title}</h1>
				{props.children}
			</main>
			<Footer />
		</>
	);
}