import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = (props) => {
	const [showCart, setShowCart] = useState(false);

	const underline = "border-b-Orange border-b-4 pb-8 pt-8 text-black";
	const menStyle = props.for === "men" || props.path === "/men" ? underline : "";
	const womenStyle = props.for === "women" || props.path === "/women" ? underline : "";
	const pathStyle = props.pathName === "/collections" ? underline : "";
	const aboutStyle = props.path === "/about" ? underline : "";
	const contactStyle = props.path === "/contacts" ? underline : "";

	const handleToggle = (toggleState) => {
		setShowCart(toggleState);
	};

	return (
		<header className="flex justify-center pb-8">
			<div className="flex justify-between items-center w-10/12 border-b-[1px] pl-8 pr-8">
				{/* LEFT */}
				<div className="flex flex-row justify-between w-[600px]">
					<img
						src={process.env.PUBLIC_URL + "../../images/logo.svg"}
						alt="logo-img"
						className="self-center"
					/>
					<span className="flex flex-row justify-between items-center w-[350px] text-dark-grayish-blue">
						<Link to="/collections">
							<p className={pathStyle}>Collections</p>
						</Link>
						<Link to="/men">
							<p className={menStyle}>Men</p>
						</Link>
						<Link to="/women">
							<p className={womenStyle}>Women</p>
						</Link>
						<Link to="/about">
							<p className={aboutStyle}>About</p>
						</Link>
						<Link to="/contacts">
							<p className={contactStyle}>Contact</p>
						</Link>
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
