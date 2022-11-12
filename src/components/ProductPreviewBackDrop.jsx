import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	return (
		<div
			className="fixed w-full inset-0 z-20 h-screen cursor-pointer bg-black bg-opacity-75"
			onClick={props.onClose}
		/>
	);
};

const ModalOverlay = (props) => {
	return (
		<div className="z-30 fixed left-[50%] -translate-x-1/2">
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
