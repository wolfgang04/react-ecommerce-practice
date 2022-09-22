import React from "react";
import Header from "../components/Header";

import data from "../db";

const Collections = () => {
	const products = data.products;

	return (
		<>
			<Header />
			<div className="flex justify-evenly">
				{products.map((product) => {
					return (
						<div
							key={product.productName}
							className="flex flex-col items-center mt-8"
						>
							<button>
								<img
									alt=""
									src={product.images[0]}
									className="w-auto h-60 rounded-xl inline m-auto"
								/>
								<p className="pt-4">{product.productName}</p>
								<p className="font-semibold rounded-lg text-center">
									${product.price}.00
								</p>
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Collections;
