import ContentBoxTitle from "./ContentBoxTitle"

export default function ContentPage(props) {
	return (
		<>
			<section
				style={{
					backgroundImage: `url(${props.backgroundImage})`
				}}
			>
				<ContentBoxTitle
					marginTop={
						props.titleMarginTop ? props.titleMarginTop : "20%"
					}
					backgroundColor="white"
				>
					<h1>{props.pageTitle}</h1>
				</ContentBoxTitle>
			</section>
			<div className="content-box-page-main" style={{ display: "flex" }}>
				<div
					style={{
						height: "50px",
						width: "200px",
						borderBottom: "3px black solid"
					}}
				></div>
				<div>{props.children}</div>
			</div>
		</>
	)
}
