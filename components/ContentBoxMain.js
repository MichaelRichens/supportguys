export default function ContentBoxMain(props) {
	return (
		<div className="content-box content-box-main">
			<h2>{props.title}</h2>
			<div className="text-container-with-line-decorator">
				<div className="decorator"></div>
				<div className="text">{props.children}</div>
			</div>
		</div>
	)
}
