import { CSSTransition } from "react-transition-group"
import ReactTooltip from "react-tooltip"

export default function PopupOverlay(props) {
	return (
		<CSSTransition
			nodeRef={props.nodeRef}
			in={props.isOpen}
			timeout={500}
			classNames="popup-overlay"
			unmountOnExit
		>
			<div className="popup-overlay" ref={props.nodeRef} >
				<nav className="close-button">
					<button type="button" onClick={props.close} data-tip="Close">
						X
					</button>
					<ReactTooltip place="left" delayShow={200} />
				</nav>
				{props.children}
			</div>
		</CSSTransition>
	);
}