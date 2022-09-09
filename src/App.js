import React, { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
	const [cart, setCart] = useState([]);

	return (
		<>
			<Header {...{ cart, setCart }} />
			<Content {...{ cart, setCart }} />
		</>
	);
}

export default App;
