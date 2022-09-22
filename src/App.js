import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import Collections from "./pages/Collections";

function App() {
	const [cart, setCart] = useState([]);

	return (
		<Routes>
			<Route path="/" element={<Navigate to="collections" />} />
			<Route path="/collections" element={<Collections />} exact />
		</Routes>
	);
}

export default App;
