import React from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import Collections from "./pages/Collections";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="collections" />} />
				<Route path="/collections" element={<Collections />} exact />
				<Route path="/collections/:productName" element={<Product />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
