import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
	const [showCart, setShowCart] = useState(false);

	const handleToggle = (toggleState) => {
		setShowCart(toggleState);
	};

	return (
		<header className="flex justify-center p-8">
			<div className="flex justify-between items-center w-10/12 pb-8 border-b-[1px]">
				{/* LEFT */}
				<div className="flex flex-row justify-between w-[600px]">
					<img
						src={process.env.PUBLIC_URL + "../../images/logo.svg"}
						alt=""
						className="self-center"
					/>
					<span className="flex flex-row justify-between w-[350px]">
						<Link to="/collections">
							<p>Collections</p>
						</Link>
						<button>
							<p>Men</p>
						</button>
						<button>
							<p>Women</p>
						</button>
						<button>
							<p>About</p>
						</button>
						<button>
							<p>Contact</p>
						</button>
					</span>
				</div>

				{/* RIGHT */}
				<div className="flex self-center w-[120px] justify-between">
					<button
						onClick={() => setShowCart((prevValue) => !prevValue)}
					>
						<img
							src={
								process.env.PUBLIC_URL +
								"../../images/icon-cart.svg"
							}
							alt=""
							className="self-center"
						/>
					</button>
					<img
						src={
							process.env.PUBLIC_URL +
							"../../images/image-avatar.png"
						}
						alt=""
						className="self-center w-12 h-auto hover:bg-Orange rounded-full"
					/>
					{showCart && <Cart onToggle={handleToggle} />}
				</div>
			</div>
		</header>
	);
};

export default Header;
