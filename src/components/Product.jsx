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
			<div className="flex justify-center items-center mx-40 p-8">
			{/* PRODUCT PREVIEW MODAL */}
			{showProductPreview && (
				<ActiveProductPreview
					onClose={handleClose}
					images={productDetails.images}
					curr={currPreview}
				/>
			)}
				<div className="flex justify-between items-center w-[1000px]">
					{/* LEFT */}

					<div>
						<button onClick={() => setShowProductPreview(true)}>
							<img
								src={currPreview}
								alt=""
								className="w-auto rounded-xl h-96 max-h-full"
							/>
						</button>

						<div className="pt-6 flex justify-between">
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
											className={`w-auto h-20 rounded-xl hover:border-Orange border-2 ${
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
					<div className="w-[500px]">
						<p className="text-Orange font-medium">
							SNEAKER COMPANY
						</p>
						<h1 className="font-bold text-4xl mt-5 mb-7">
							{productDetails.productName}
						</h1>
						<p className="mb-5">
							These low-profile sneakers are your perfect casual
							wear companion. Featuring a durable rubber outer
							sole, they'll withstand everything the weather can
							offer.
						</p>

						{/* PRICE */}
						<div>
							<div className="flex items-center justify-between max-w-[150px]">
								<h1 className="font-bold text-2xl mb-1">
									${productDetails.price}.00
								</h1>
								<p className="text-Orange bg-pale-orange font-semibold rounded-lg text-center w-12">
									50%
								</p>
							</div>

							<p className="line-through text-gray-500">
								$250.00
							</p>
						</div>

						{/* ADD TO CART SECTION */}
						<div className="flex items-center justify-between mt-8">
							{/* AMOUNT INPUT */}
							<div className="flex justify-around items-center w-[200px] max-w-[200px] h-[40px] bg-light-grayish-blue rounded-lg">
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

							{/* BUTTON */}
							<button
								className="flex justify-center items-center w-[350px] h-[40px] ml-5 bg-Orange text-white rounded-lg"
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
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
