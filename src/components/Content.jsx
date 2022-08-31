import React, { useState } from "react";

import cart from "../images/icon-cart.svg";
import shoe1 from "../images/image-product-1.jpg";
import shoe1tn from "../images/image-product-1-thumbnail.jpg";
import shoe2tn from "../images/image-product-2-thumbnail.jpg";
import shoe3tn from "../images/image-product-3-thumbnail.jpg";
import shoe4tn from "../images/image-product-4-thumbnail.jpg";

const Content = () => {
	const [amount, setAmount] = useState(0);

	const handleIncreaseAmount = () => {
		if (amount === 10) return;
		setAmount((prevAmount) => prevAmount + 1);
	};

	const handleDecreaseAmount = () => {
		if (amount === 0) return;
		setAmount((prevAmount) => prevAmount - 1);
	};

	return (
		<div className="flex justify-center items-center mx-40 p-8">
			<div className="flex justify-between items-center w-[1000px]">
				{/* LEFT */}
				<div>
					<img
						src={shoe1}
						alt=""
						className="w-auto rounded-xl h-96 max-h-full"
					/>
					<div className="pt-6 flex justify-between">
						<img
							src={shoe1tn}
							alt=""
							className="w-auto h-20 rounded-xl inline"
						/>
						<img
							src={shoe2tn}
							alt=""
							className="w-auto h-20 rounded-xl inline"
						/>
						<img
							src={shoe3tn}
							alt=""
							className="w-auto h-20 rounded-xl inline"
						/>
						<img
							src={shoe4tn}
							alt=""
							className="w-auto h-20 rounded-xl inline"
						/>
					</div>
				</div>
				{/* RIGHT */}
				<div className="w-[500px]">
					<p className="text-Orange font-medium">SNEAKER COMPANY</p>
					<h1 className="font-bold text-4xl mt-5 mb-7">
						Fall Limited Edition Sneakers
					</h1>
					<p className="mb-5">
						These low-profile sneakers are your perfect casual wear
						companion. Featuring a durable rubber outer sole,
						they'll withstand everything the weather can offer.
					</p>
					{/* PRICE */}
					<div>
						<div className="flex items-center justify-between max-w-[150px]">
							<h1 className="font-bold text-2xl mb-1">$125.00</h1>
							<p className="text-Orange bg-pale-orange font-semibold rounded-lg text-center w-12">
								50%
							</p>
						</div>

						<p className="line-through text-gray-500">$250.00</p>
					</div>
					{/* ADD TO CART SECTION */}
					<div className="flex items-center justify-between mt-8">
						{/* AMOUNT INPUT */}
						<div className="flex justify-around items-center w-[200px] max-w-[200px] h-[40px] bg-light-grayish-blue rounded-lg">
							<button
								onClick={handleDecreaseAmount}
								className="text-Orange font-black text-2xl"
							>
								-
							</button>
							<p className="">{amount}</p>
							<button
								onClick={handleIncreaseAmount}
								className="text-Orange font-black text-2xl"
							>
								+
							</button>
						</div>
						{/* BUTTON */}
						<div className="flex justify-center items-center w-[350px] h-[40px] ml-5 bg-Orange text-white rounded-lg">
							<img
								src={cart}
								alt=""
								className="self-center pr-2"
							/>
							<p>Add to cart</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
