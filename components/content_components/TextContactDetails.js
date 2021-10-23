import { useContext } from "react"

import EmailContext from "../../context/EmailContext"

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
					email
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
			</dl>
		</>
	)
}
