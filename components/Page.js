import Head from "next/head";
import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";

export default function Page(props) {
	const canonicalURL = process.env.NEXT_PUBLIC_DOMAIN + useRouter().pathname
	// Example data from MacUpgrades
	const structuredDataOrg = { __html: JSON.stringify({
		"@context": "http://schema.org/",
		"@type": "Website",
		"name": "MacUpgrades.co.uk",
		"description": "Expert Repair and Upgrades for Apple Mac computers with over 20 years experience.   From logic board repair to SSD upgrades, MacUpgrades provides products and services to improve and extend the useful life of your Mac.",
		"keywords": "macupgrades, mac upgrades, mac repair, logic board repair, mac repair, mac ssd, mac ram, mac drive, macbook pro, macbook air, mac pro, imac",
		"url": "https://www.macupgrades.co.uk/store/",
		"image": {
			"@type": "ImageObject",
			"url": "https://www.macupgrades.co.uk/store/images/toptitle_sm.gif",
			"height": 40,
			"width": 230
		},
		"author": {
			"@type": "Corporation",
			"name": "MacUpgrades",
			"description": "Expert Repair and Upgrades for Apple Mac computers with over 20 years experience.  From logic board repair to SSD upgrades, MacUpgrades provides products and services to improve and extend the useful life of your Mac.",
			"url": "https://www.macupgrades.co.uk/store/",
			"telephone": "+441223833412",
			"image": {
				"@type": "ImageObject",
				"url": "https://www.macupgrades.co.uk/store/images/toptitle_sm.gif",
				"height": 40,
				"width": 230
				},
			"contactPoint": [
				{
					"@type": "ContactPoint",
					"contactType": "customer service",
					"telephone": "+441223833412"
				}
			],
			"address": {
				"@type": "PostalAddress",
				"addressCountry": "GB",
				"streetAddress": "Unit 5 South Cambridgeshire Business Park",
				"addressLocality": "Sawston",
				"addressRegion": "Cambridge",
				"postalCode": "CB22 3JH"				
			}
		}
	})}

	return (
		<>
			<Head>
				<title>Microsite{props.title && `: ${props.title}`}</title>
				{props.metaDescription && <meta name="description" content={props.metaDescription} />}
				<link rel="canonical" href={canonicalURL} />
				<script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataOrg}
      />
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