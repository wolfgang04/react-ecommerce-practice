import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "./CartModal";
import { cartActions } from "../store/cartSlice";

const Cart = (props) => {
	const [toggle, setToggle] = useState(false);
	let cart = useSelector((state) => state.items);
	let cartTotalItems = useSelector((state) => state.totalItems);
	const dispatch = useDispatch();

	const handleToggle = () => {
		setToggle((prevValue) => !prevValue);

		props.onToggle(toggle);
	};

	return (
		<Transition appear show={props.show} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={handleToggle}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0" />
				</Transition.Child>

				<div className="fixed inset-0 top-[50px] overflow-y-auto">
					<div className="flex min-h-full items-start justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="min-h-[225px] w-full max-w-[325px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="flex items-center justify-between border-b-[1px] pb-2 text-lg font-medium leading-6 text-gray-900"
								>
									Cart
									<button onClick={handleToggle}>
										<img
											alt=""
											src={
												process.env.PUBLIC_URL +
												"/images/icon-close.svg"
											}
										/>
									</button>
								</Dialog.Title>
								<div className="flex h-full flex-col items-center justify-center">
									<div
										className={`mx-0 mt-4 h-[116px] ${
											cartTotalItems == 0
												? "flex items-center justify-center"
												: ""
										}`}
									>
										{cart.map((item) => {
											return (
												<div
													className="mb-5 flex w-[280px] shrink items-center justify-between p-0"
													key={item.name}
												>
													<img
														className="h-12 w-auto rounded-md"
														src={item.tn}
														alt=""
													/>
													<div>
														<p>{item.name}</p>
														<p>{`$${item.price} x${
															item.amount
														} $${
															item.price *
															item.amount
														}`}</p>
													</div>

													<button
														onClick={() =>
															dispatch(
																cartActions.removeItem(
																	item.id
																)
															)
														}
													>
														<img
															className="h-auto w-[14px]"
															alt=""
															src={
																process.env
																	.PUBLIC_URL +
																"../../images/icon-delete.svg"
															}
														/>
													</button>
												</div>
											);
										})}

										{cartTotalItems > 0 && (
											<button className="flex h-12 w-[280px] items-center justify-center rounded-lg bg-Orange">
												<p className="text-white">
													Checkout
												</p>
											</button>
										)}

										{cartTotalItems < 1 && (
											<div>
												<p className="text-dark-grayish-blue">
													Your cart is empty.
												</p>
											</div>
										)}
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);

	{
		/* <Modal onClose={handleToggle}>
			<div className=" bg-white m-5 mt-[65px] sm:mt-[100px] w-[90vw] shadow-2xl min-h-[225px] max-w-[325px] rounded-lg">
				<div>
					<p className="font-bold p-5 border-b-[1px]">Cart</p>
				</div>

				<div className="flex flex-col items-center justify-center h-full">
					<div className="m-4 mx-0 px-4">
						{cart.map((item) => {
							return (
								<div
									className="flex justify-between items-center shrink p-0 w-[280px] mb-5"
									key={item.name}
								>
									<img
										className="w-auto h-12 rounded-md"
										src={item.tn}
										alt=""
									/>
									<div>
										<p>{item.name}</p>
										<p>{`$${item.price} x${item.amount} $${
											item.price * item.amount
										}`}</p>
									</div>

									<button
										onClick={() =>
											dispatch(
												cartActions.removeItem(item.id)
											)
										}
									>
										<img
											className="h-auto w-[14px]"
											alt=""
											src={
												process.env.PUBLIC_URL +
												"../../images/icon-delete.svg"
											}
										/>
									</button>
								</div>
							);
						})}

						{cartTotalItems > 0 && (
							<button className="flex justify-center items-center bg-Orange h-12 rounded-lg w-[280px]">
								<p className="text-white">Checkout</p>
							</button>
						)}
					</div>

					{cartTotalItems < 1 && (
						<div>
							<p className="text-dark-grayish-blue">
								Your cart is empty.
							</p>
						</div>
					)}
				</div>
			</div>
					</Modal> */
	}
};

export default Cart;
