import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	return (
		<div
			className="fixed top-0 left-0 w-full z-30 h-screen cursor-pointer bg-black bg-opacity-75"
			onClick={props.onClose}
		/>
	);
};

const ModalOverlay = (props) => {
	return (
		<div className="fixed z-40 inset-0">
			<div className="">{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const ProductPreviewModal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default ProductPreviewModal;
