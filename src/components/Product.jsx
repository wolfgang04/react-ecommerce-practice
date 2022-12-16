import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { cartActions } from "../store/cartSlice";
import ActiveProductPreview from "./ActiveProductLightBox";
import Header from "./Header";

const Product = () => {
	const [showProductPreview, setShowProductPreview] = useState(false);
	const location = useLocation();
	const { productDetails } = location.state;
	const [currPreview, setCurrPreview] = useState(productDetails.images[0]);
	const [amount, setAmount] = useState(0);
	const dispatch = useDispatch();

	const handleAddItem = () => {
		if (amount === 0) return;

		dispatch(
			cartActions.addItem({
				amount: amount,
				id: productDetails.id,
				name: productDetails.productName,
				price: productDetails.price,
				tn: productDetails.images[0],
			})
		);
		setAmount(0);
	};

	const handleIncreaseAmount = () => {
		if (amount === 10) return;
		setAmount((prevAmount) => prevAmount + 1);
	};

	const handleDecreaseAmount = () => {
		if (amount === 0) return;
		setAmount((prevAmount) => prevAmount - 1);
	};

	const handleClose = (props) => {
		setShowProductPreview(props);
	};

	return (
		<>
			<Header for={productDetails.for} />
			<div className="md:flex md:items-center md:justify-center md:p-8">
				{/* PRODUCT PREVIEW LIGHT BOX */}
				{showProductPreview && (
					<ActiveProductPreview
						onClose={handleClose}
						images={productDetails.images}
						curr={currPreview}
					/>
				)}

				<div className="mb-20 max-w-5xl md:flex">
					{/* LEFT */}

					<div className="flex shrink-0 flex-col items-center justify-center sm:mx-5">
						<button onClick={() => setShowProductPreview(true)}>
							<img
								src={currPreview}
								alt=""
								className="h-full  max-h-[420px] w-full shrink-0 object-cover sm:h-auto sm:rounded-xl"
							/>
						</button>

						<div className="hidden justify-between pt-6 md:flex">
							{productDetails.images.map((image, idx) => {
								return (
									<button
										key={`preview no.${idx}`}
										onClick={() => setCurrPreview(image)}
										className=" rounded-xl"
									>
										<img
											src={image}
											alt=""
											className={`h-20 w-auto rounded-xl border-2 hover:border-Orange ${
												image === currPreview
													? "border-Orange"
													: "border-transparent"
											}`}
										/>
									</button>
								);
							})}
						</div>
					</div>

					{/* RIGHT */}
					<div className="mx-5 my-3 flex max-w-5xl flex-col items-center justify-center">
						<div className="max-w-[425px]">
							<p className="text-xs font-medium text-Orange sm:text-base">
								SNEAKER COMPANY
							</p>
							<h1 className="mt-3 mb-4 text-2xl font-bold sm:mt-5 sm:mb-6 sm:text-4xl">
								{productDetails.productName}
							</h1>
							<p className="mb-5 text-sm text-dark-grayish-blue sm:text-base">
								These low-profile sneakers are your perfect
								casual wear companion. Featuring a durable
								rubber outer sole, they'll withstand everything
								the weather can offer.
							</p>

							{/* PRICE */}
							<div className="flex justify-between">
								<div className="flex gap-4">
									<h1 className="text-xl font-bold sm:text-2xl">
										${productDetails.price}.00
									</h1>
									<p className="w-12 rounded-lg bg-pale-orange text-center font-semibold text-Orange">
										50%
									</p>
								</div>

								<p className="flex items-center text-xs text-gray-500 line-through">
									$250.00
								</p>
							</div>
						</div>

						{/* ADD TO CART SECTION */}
						<div className=" w-full max-w-[425px]">
							{/* AMOUNT INPUT */}
							<div className="my-3 flex h-[40px] items-center justify-around rounded-lg bg-light-grayish-blue">
								<button onClick={handleDecreaseAmount}>
									<img
										alt=""
										src={
											process.env.PUBLIC_URL +
											"../../images/icon-minus.svg"
										}
									/>
								</button>

								<p className="">{amount}</p>
								<button onClick={handleIncreaseAmount}>
									<img
										alt=""
										src={
											process.env.PUBLIC_URL +
											"../../images/icon-plus.svg"
										}
									/>
								</button>
							</div>

							{/* ADD TO CART BUTTON */}
							<div
								className="my-3 flex h-[40px] cursor-pointer items-center justify-center rounded-lg bg-Orange text-white"
								onClick={handleAddItem}
							>
								<img
									alt=""
									className="self-center pr-2"
									src={
										process.env.PUBLIC_URL +
										"../../images/icon-cart.svg"
									}
								/>
								<p>Add to cart</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
