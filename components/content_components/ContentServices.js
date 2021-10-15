import ContentBoxShadowed from "../ContentBoxShadowed"

import styles from "../../styles/ContentServices.module.css"

export default function ContentServices(props) {
	return (
		<section className={styles["services"]}>
			<div className={styles["top_info"]}>
				{props.onOwnPage && <h1>Support Guys</h1>}
				<h2>Our Services</h2>
				<p>
					Sometimes we all need some Support. We aim to help you get
					the most from your IT infrastructure and devices, and give
					you the time and confidence to do what you do best. Here are
					some of the many areas in which we can help your business.
				</p>
			</div>
			<div className="content-box-group">
				<ContentBoxShadowed>
					<h3>Box</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam in neque est. Maecenas quis nisl pellentesque,
						blandit urna id, dictum lorem. Curabitur et ipsum ante.
						Maecenas pellentesque vestibulum erat, in ornare enim
						volutpat hendrerit. Praesent laoreet tempus sagittis.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed>
					<h3>Box</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam in neque est. Maecenas quis nisl pellentesque,
						blandit urna id, dictum lorem. Curabitur et ipsum ante.
						Maecenas pellentesque vestibulum erat, in ornare enim
						volutpat hendrerit. Praesent laoreet tempus sagittis.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed>
					<h3>Box</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam in neque est. Maecenas quis nisl pellentesque,
						blandit urna id, dictum lorem. Curabitur et ipsum ante.
						Maecenas pellentesque vestibulum erat, in ornare enim
						volutpat hendrerit. Praesent laoreet tempus sagittis.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed>
					<h3>Box</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam in neque est. Maecenas quis nisl pellentesque,
						blandit urna id, dictum lorem. Curabitur et ipsum ante.
						Maecenas pellentesque vestibulum erat, in ornare enim
						volutpat hendrerit. Praesent laoreet tempus sagittis.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed>
					<h3>Box</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam in neque est. Maecenas quis nisl pellentesque,
						blandit urna id, dictum lorem. Curabitur et ipsum ante.
						Maecenas pellentesque vestibulum erat, in ornare enim
						volutpat hendrerit. Praesent laoreet tempus sagittis.
					</p>
				</ContentBoxShadowed>
				<ContentBoxShadowed>
					<h3>Box</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam in neque est. Maecenas quis nisl pellentesque,
						blandit urna id, dictum lorem. Curabitur et ipsum ante.
						Maecenas pellentesque vestibulum erat, in ornare enim
						volutpat hendrerit. Praesent laoreet tempus sagittis.
					</p>
				</ContentBoxShadowed>
			</div>
		</section>
	)
}
