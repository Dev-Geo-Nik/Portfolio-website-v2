import React, { useEffect } from "react";
import Home from "../components/home/Home";
import SEO from "../components/layout/Seo";

const index: React.FC = () => {
	return (
		<>
			<SEO title="Home" />
			<Home />
		</>
	);
};

export default index;
