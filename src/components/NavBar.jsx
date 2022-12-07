import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const NavBar = ({ showNavBar, setShowNavBar }) => {
	return (
		<Transition show={showNavBar} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 overflow-hidden z-10"
				onClose={() => setShowNavBar(false)}
			>
				<div className="absolute inset-0 overflow-hidden">
					<Transition.Child>
						<Dialog.Overlay
							className="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
							onClick={() => setShowNavBar(false)}
						/>
					</Transition.Child>

					<div className="fixed inset-y-0 left-0 flex max-w-full">
						<Transition.Child
							as={Fragment}
							enter="transform transition ease-in-out duration-500 sm:duration-700"
							enterFrom="-translate-x-full"
							enterTo="-translate-x-0"
							leave="-transform transition ease-in-out duration-500 sm:duration-700"
							leaveFrom="-translate-x-0"
							leaveTo="-translate-x-full"
						>
							<div className="w-[75vw] max-w-md bg-white">
								<div className="flex flex-col items-start gap-10 p-7 h-[300px]">
									<img
										src={
											process.env.PUBLIC_URL +
											"/images/icon-close.svg"
										}
										alt="close button"
                    className="w-auto h-4 "
                    onClick={() => setShowNavBar(false)}
									/>

									<span className="flex flex-col items-start justify-between h-full">
										<Link to="/collections">
											<p className="font-bold">
												Collections
											</p>
										</Link>
										<Link to="/men">
											<p className="font-bold">Men</p>
										</Link>
										<Link to="/women">
											<p className="font-bold">Women</p>
										</Link>
										<Link to="/about">
											<p className="font-bold">About</p>
										</Link>
										<Link to="/contacts">
											<p className="font-bold">Contact</p>
										</Link>
									</span>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default NavBar;
