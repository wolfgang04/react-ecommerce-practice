import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";

import data from "../db";

const MensCollection = () => {
  const products = data.products;
  const mensProducts = products.filter(product => product.for === "men");
  const location = useLocation();


	return (
		<>
			<Header path={location.pathname} />
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{mensProducts.map((product) => {
					return (
						<div
							key={product.productName}
							className="flex flex-col items-center mt-8"
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
		</>
	);
};

export default MensCollection;
