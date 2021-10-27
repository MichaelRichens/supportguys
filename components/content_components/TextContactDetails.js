import { useContext } from "react"
import Link from "next/link"
import Image from "next/image"

import EmailContext from "../../context/EmailContext"

import styles from "../../styles/TextContactDetails.module.css"

import facebook_logo_small_square from "../../public/images/logos/facebook_logo25x25.png"

export default function TextContactDetails() {
	const { emailDispatch } = useContext(EmailContext)

	return (
		<>
			<dl>
				<dt>Tel</dt>
				<dd>{process.env.NEXT_PUBLIC_PHONE}</dd>
				<dt
					className="clickable"
					onClick={() => emailDispatch({ type: "formToggle" })}
				>
					Email
				</dt>
				<dd
					className="clickable"
					onClick={() => emailDispatch({ type: "formToggle" })}
				>
					{process.env.NEXT_PUBLIC_EMAIL}
				</dd>
				<dt>Address</dt>
				<dd>
					<ul>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_STREET}</li>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_LOCALITY}</li>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_REGION}</li>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_POSTCODE}</li>
						<li>{process.env.NEXT_PUBLIC_ADDRESS_COUNTRY}</li>
					</ul>
				</dd>
				<dt>Social</dt>
				<dd>
					<ul>
						<li className={styles.social}>
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
				</dd>
			</dl>
		</>
	)
}
