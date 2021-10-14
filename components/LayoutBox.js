export default function LayoutBox(props) {
	return (
		<section
			style={{
				backgroundImage: props.backgroundImageUrl
					? `url(/images/${props.backgroundImageUrl})`
					: "none"
			}}
		>
			{props.children}
		</section>
	)
}
