import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import Collections from "./pages/Collections";

function App() {
	const [cart, setCart] = useState([]);

	return (
		<Routes>
			<Route path="/" element={<Navigate to="collections" />} />
			<Route path="/collections" element={<Collections />} exact />
			<Route path="/collections/:productName" element={<Product />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
