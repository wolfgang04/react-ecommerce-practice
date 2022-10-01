import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import Product from "./components/Product";
import Collections from "./pages/Collections";

function App() {
	const [cart, setCart] = useState([]);

	return (
		<Routes>
			<Route path="/" element={<Navigate to="collections" />} />
			<Route path="/collections" element={<Collections />} exact />
			<Route path="/collections/:productName" element={<Product />} />
		</Routes>
	);
}

export default App;
