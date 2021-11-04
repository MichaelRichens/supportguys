import Head from "next/head"
import { useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import smartquotes from "smartquotes"

import FlashMessageContext from "../context/FlashMessageContext"
import EmailContext from "../context/EmailContext"

import PopupOverlay from "./PopupOverlay"
import ContactForm from "./ContactForm"
import Header from "./Header"
import Footer from "./Footer"
import FlashMessages from "./FlashMessages"

export default function Page(props) {
	const { emailState, emailDispatch } = useContext(EmailContext)
	const contactPopupNodeRef = useRef(null)
	const [flashMessages, setFlashMessages] = useState([])
	const canonicalURL = process.env.NEXT_PUBLIC_DOMAIN + useRouter().pathname

	const structuredDataOrg = {
		__html: JSON.stringify({
			"@context": "http://schema.org/",
			"@type": "Website",
			name: `${process.env.NEXT_PUBLIC_STRUCT_DAT_WEBSITE_NAME}`,
			description: `${process.env.NEXT_PUBLIC_STRUCT_DAT_WEBSITE_DESC}`,
			keywords: `${process.env.NEXT_PUBLIC_STRUCT_DAT_WEBSITE_KEYWORDS}`,
			url: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
			image: {
				"@type": "ImageObject",
				url: `${process.env.NEXT_PUBLIC_STRUCT_DAT_WEBSITE_LOGO_PATH}`,
				height: `${process.env.NEXT_PUBLIC_STRUCT_DAT_WEBSITE_LOGO_HEIGHT}`,
				width: `${process.env.NEXT_PUBLIC_STRUCT_DAT_WEBSITE_LOGO_WIDTH}`
			},
			author: {
				"@type": "Corporation",
				name: `${process.env.NEXT_PUBLIC_STRUCT_DAT_AUTHOR_NAME}`,
				description: `${process.env.NEXT_PUBLIC_STRUCT_DAT_AUTHOR_NAME}`,
				url: `${process.env.NEXT_PUBLIC_STRUCT_DAT_AUTHOR_URL}/`,
				telephone: `${process.env.NEXT_PUBLIC_PHONE_INT}`,
				image: {
					"@type": "ImageObject",
					url: `${process.env.NEXT_PUBLIC_STRUCT_DAT_AUTHOR_LOGO_PATH}`,
					height: `${process.env.NEXT_PUBLIC_STRUCT_DAT_AUTHOR_LOGO_HEIGHT}`,
					width: `${process.env.NEXT_PUBLIC_STRUCT_DAT_AUTHOR_LOGO_WIDTH}`
				},
				contactPoint: [
					{
						"@type": "ContactPoint",
						contactType: "customer service",
						telephone: `${process.env.NEXT_PUBLIC_PHONE_INT}`
					}
				],
				address: {
					"@type": "PostalAddress",
					addressCountry: `${process.env.NEXT_PUBLIC_STRUCT_DAT_AUTHOR_ADDRESS_COUNTRY}`,
					streetAddress: `${process.env.NEXT_PUBLIC_ADDRESS_STREET}`,
					addressLocality: `${process.env.NEXT_PUBLIC_ADDRESS_LOCALITY}`,
					addressRegion: `${process.env.NEXT_PUBLIC_ADDRESS_REGION}`,
					postalCode: `${process.env.NEXT_PUBLIC_ADDRESS_POSTCODE}`
				}
			}
		})
	}

	useEffect(() => {
		smartquotes().listen()
	}, [])

	useEffect(() => {
		if (process.env.NODE_ENV == "production") {
			const script = document.createElement("script")
			script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`
			script.async = true
			document.head.appendChild(script)
			return () => {
				document.head.removeChild(script)
			}
		}
	}, [])

	return (
		<FlashMessageContext.Provider
			value={{
				flashMessages: flashMessages,
				setFlashMessages: setFlashMessages
			}}
		>
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
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Spinnaker&display=swap"
					rel="stylesheet"
				/>

				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
				{process.env.NODE_ENV == "production" && (
					<>
						<script
							dangerouslySetInnerHTML={{
								__html: `
            					window.dataLayer = window.dataLayer || [];
            					function gtag(){dataLayer.push(arguments);}
            					gtag('js', new Date());
            					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              						page_path: window.location.pathname,
           				 		});
          						`
							}}
						/>
					</>
				)}
			</Head>
			<Header>
				<FlashMessages messages={flashMessages} />
				<PopupOverlay
					nodeRef={contactPopupNodeRef}
					isOpen={emailState.contactFormOpen}
					close={() => emailDispatch({ type: "formClose" })}
				>
					<ContactForm />
				</PopupOverlay>
			</Header>
			<main>{props.children}</main>
			<Footer />
		</FlashMessageContext.Provider>
	)
}
