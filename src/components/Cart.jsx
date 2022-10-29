import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
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

	console.log(cartTotalItems);

	return (
		<Modal onClose={handleToggle}>
			<div className="bg-white w-80 shadow-2xl min-h-[225px] ml-auto rounded-lg fixed">
				<div>
					<p className="font-bold p-5 border-b-[1px]">Cart</p>
				</div>

				<div className="flex flex-col items-center justify-center h-full">
					<div className="m-4 mx-0">
						{cart.map((item) => {
							return (
								<div
									className="flex justify-between items-center p-0 w-[280px] mb-5"
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
		</Modal>
	);
};

export default Cart;
