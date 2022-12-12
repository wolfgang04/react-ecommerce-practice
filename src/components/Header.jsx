import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import NavBar from "./NavBar";

const Header = (props) => {
	const [showCart, setShowCart] = useState(false);
	const [showNavBar, setShowNavBar] = useState(false);

	const underline = "border-b-Orange border-b-4 pb-8 pt-8 text-black";
	const menStyle =
		props.for === "men" || props.path === "/men" ? underline : "";
	const womenStyle =
		props.for === "women" || props.path === "/women" ? underline : "";
	const pathStyle = props.pathName === "/collections" ? underline : "";
	const aboutStyle = props.path === "/about" ? underline : "";
	const contactStyle = props.path === "/contacts" ? underline : "";

	const handleToggle = (toggleState) => {
		setShowCart(toggleState);
	};

	return (
		<header className="flex justify-center sm:pb-8 h-[52px] sm:h-[125px]">
			<div className="flex justify-between items-center w-5/6 border-b-[1px]">
				{/* LEFT */}

				<NavBar {...{ showNavBar, setShowNavBar }} />
				<div className="flex flex-row justify-between w-[600px]">
					<div className="flex gap-4 md:gap-0">
						<button
							onClick={() =>
								setShowNavBar((prevValue) => !prevValue)
							}
						>
							<img
								src={
									process.env.PUBLIC_URL +
									"/images/icon-menu.svg"
								}
								alt=""
								className="md:hidden w-auto h-3 sm:h-auto"
							/>
						</button>

						<img
							src={
								process.env.PUBLIC_URL + "../../images/logo.svg"
							}
							alt="logo-img"
							className="self-center w-auto h-4 sm:h-5"
						/>
					</div>

					<span className="hidden md:flex flex-row justify-between items-center w-[350px] text-dark-grayish-blue mx-4">
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
				<div className="flex flex-shrink-0 relative w-[65px] sm:w-[100px] md:w-[110px] justify-between">
					<div className="flex">
						<button
							onClick={() =>
								setShowCart((prevValue) => !prevValue)
							}
						>
							<img
								src={
									process.env.PUBLIC_URL +
									"../../images/icon-cart.svg"
								}
								alt=""
								className="self-center h-auto w-5 sm:w-6"
							/>
						</button>

						<Cart show={showCart} onToggle={handleToggle} />
					</div>

					<img
						src={
							process.env.PUBLIC_URL +
							"../../images/image-avatar.png"
						}
						alt=""
						className="self-center w-8 sm:w-12 h-auto hover:bg-Orange rounded-full"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
