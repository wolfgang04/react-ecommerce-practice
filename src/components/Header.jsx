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
		<header className="flex h-[52px] justify-center sm:h-[109px] sm:pb-4 md:h-[125px] md:pb-8">
			<div className="flex w-5/6 items-center justify-between border-b-[1px]">
				{/* LEFT */}

				<NavBar {...{ showNavBar, setShowNavBar }} />
				<div className="flex w-[600px] flex-row justify-between">
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
								className="h-3 w-auto sm:h-auto md:hidden"
							/>
						</button>

						<img
							src={
								process.env.PUBLIC_URL + "../../images/logo.svg"
							}
							alt="logo-img"
							className="h-4 w-auto self-center sm:h-5"
						/>
					</div>

					<span className="mx-4 hidden w-[350px] flex-row items-center justify-between text-dark-grayish-blue md:flex">
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
				<div className="relative flex w-[65px] flex-shrink-0 justify-between sm:w-[100px] md:w-[110px]">
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
								className="h-auto w-5 self-center sm:w-6"
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
						className="h-auto w-8 self-center rounded-full hover:bg-Orange sm:w-12"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
