import React from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Product from "./components/Product";
import Collections from "./pages/Collections";
import MensCollection from "./pages/MensCollection";
import WomensCollection from "./pages/WomensCollection";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="collections" />} />
				<Route path="/collections" element={<Collections />} exact />
				<Route path="/collections/:productName" element={<Product />} />
				<Route path="/men" element={<MensCollection />} />
				<Route path="/women" element={<WomensCollection />} />
				<Route path="/about" element={<About />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
