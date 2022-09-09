import React, { useState } from "react";

import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

const Header = () => {
	const [showCart, setShowCart] = useState(false);

	return (
		<header className="flex justify-center p-8">
			<div className="flex justify-between items-center w-10/12 pb-8 border-b-[1px]">
				{/* LEFT */}
				<div className="flex flex-row justify-between w-[600px]">
					<img src={logo} alt="" className="self-center" />
					<span className="flex flex-row justify-between w-[350px]">
						<a href="">
							<p>Collections</p>
						</a>
						<a href="">
							<p>Men</p>
						</a>
						<a href="">
							<p>Women</p>
						</a>
						<a href="">
							<p>About</p>
						</a>
						<a href="">
							<p>Contact</p>
						</a>
					</span>
				</div>

				{/* RIGHT */}
				<div className="flex self-center w-[120px] justify-between">
					<button
						onClick={() => setShowCart((prevValue) => !prevValue)}
					>
						<img src={cart} alt="" className="self-center" />
					</button>
					<img
						src={avatar}
						alt=""
						className="self-center w-12 h-auto hover:bg-Orange rounded-full"
					/>
					{showCart && (
						<div
							onClick={() =>
								setShowCart((prevValue) => !prevValue)
							}
							className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
						>
							<div className="bg-white w-80 shadow-2xl min-h-[230px] ml-auto rounded-lg relative right-[90px] top-[80px]">
								<div>
									<p className="font-bold p-5 border-b-[1px]">
										Cart
									</p>
								</div>

								<div className="flex flex-col items-center justify-center h-full">
									<p className="text-dark-grayish-blue">
										Your cart is empty.
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
