import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image"

import Header from "./Header"
import Footer from "./Footer"
import { useFlashMessages } from "../shared/useFlashMessages"
import FlashMessages from "./FlashMessages"

export default function Page(props) {
	const canonicalURL = process.env.NEXT_PUBLIC_DOMAIN + useRouter().pathname

	const structuredDataOrg = {
		__html: JSON.stringify({
			"@context": "http://schema.org/",
			"@type": "Website",
			name: `${process.env.NEXT_PUBLIC_STRUC_DAT_WEBSITE_NAME}`,
			description: `${process.env.NEXT_PUBLIC_STRUC_DAT_WEBSITE_DESC}`,
			keywords: `${process.env.NEXT_PUBLIC_STRUC_DAT_WEBSITE_KEYWORDS}`,
			url: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
			image: {
				"@type": "ImageObject",
				url: `${
					process.env.NEXT_PUBLIC_DOMAIN +
					process.env.NEXT_PUBLIC_STRUC_DAT_WEBSITE_LOGO_PATH
				}`,
				height: `${process.env.NEXT_PUBLIC_STRUC_DAT_WEBSITE_LOGO_HEIGHT}`,
				width: `${process.env.NEXT_PUBLIC_STRUC_DAT_WEBSITE_LOGO_WIDTH}`
			},
			author: {
				"@type": "Corporation",
				name: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_NAME}`,
				description: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_NAME}`,
				url: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_URL}/`,
				telephone: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_PHONE}`,
				image: {
					"@type": "ImageObject",
					url: `${
						process.env.NEXT_PUBLIC_DOMAIN +
						process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_LOGO_PATH
					}`,
					height: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_LOGO_HEIGHT}`,
					width: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_LOGO_WIDTH}`
				},
				contactPoint: [
					{
						"@type": "ContactPoint",
						contactType: "customer service",
						telephone: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_PHONE}`
					}
				],
				address: {
					"@type": "PostalAddress",
					addressCountry: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_ADDRESS_COUNTRY}`,
					streetAddress: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_ADDRESS_STREET}`,
					addressLocality: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_ADDRESS_LOCALITY}`,
					addressRegion: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_ADDRESS_REGION}`,
					postalCode: `${process.env.NEXT_PUBLIC_STRUC_DAT_AUTHOR_ADDRESS_POSTCODE}`
				}
			}
		})
	}
	const [flashMessages, setFlashMessages] = useFlashMessages()

	return (
		<>
			<FlashMessages messages={flashMessages} />
			<Head>
				<title>
					{process.env.NEXT_PUBLIC_NAME +
						(props.title &&
						props.title != process.env.NEXT_PUBLIC_NAME
							? `: ${props.title}`
							: "")}
				</title>
				{props.metaDescription && (
					<meta name="description" content={props.metaDescription} />
				)}
				<link rel="canonical" href={canonicalURL} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={structuredDataOrg}
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Spinnaker&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header />
			<main
				style={{
					backgroundImage: props.backgroundImageUrl
						? `url(/images/${props.backgroundImageUrl})`
						: "none"
				}}
			>
				{props.children}
			</main>
			<Footer />
		</>
	)
}
