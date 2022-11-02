import React from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";

const About = () => {
	const location = useLocation();

	return (
		<>
			<Header path={location.pathname} />
			<div className="pt-[32px] mx-36">
				<h1 className="text-4xl">Who we are</h1>
			</div>
		</>
	);
};

export default About;
