import React from "react";

import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

const Header = () => {
	return (
		<header className="flex justify-center p-8">
			<div className="flex justify-between items-center w-10/12 pb-8 border-b-[1px]">
				{/* LEFT */}
				<div className="flex flex-row justify-between w-[600px]">
					<img src={logo} alt="" className="self-center" />
					<span className="flex flex-row justify-between w-[350px]">
						<p>Collections</p>
						<p>Men</p>
						<p>Women</p>
						<p>About</p>
						<p>Contact</p>
					</span>
				</div>
				{/* RIGHT */}
				<div className="flex self-center w-[120px] justify-between">
					<button>
						<img src={cart} alt="" className="self-center" />
					</button>
					<img
						src={avatar}
						alt=""
						className="self-center w-12 h-auto"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
