import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";

import data from "../db";

const Collections = () => {
	const products = data.products;
	const location = useLocation();

	return (
		<>
			<Header pathName={location.pathname} />
			<div className="flex justify-center items-center mb-10">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{products.map((product) => {
						return (
							<div
								key={product.productName}
								className="shrink-0 flex flex-col items-center mt-8"
							>
								<button>
									<Link
										to={`/collections/${product.productName}`}
										state={{ productDetails: product }}
									>
										<img
											alt=""
											src={product.images[0]}
											className="w-auto h-60 rounded-xl inline m-auto"
										/>
										<p className="pt-4">
											{product.productName}
										</p>
										<p className="font-semibold rounded-lg text-center">
											${product.price}.00
										</p>
									</Link>
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Collections;
