import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	return (
		<div
			className="fixed top-0 left-0 w-full h-screen z-20 cursor-pointer"
			onClick={props.onClose}
		/>
	);
};

const ModalOverlay = (props) => {
	return <div className="fixed z-30 inset-y-20 inset-x-[73%]">{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
