import React from "react";
import SEO from "../components/layout/Seo";
import Projects from "../components/projects/Projects";

const projects: React.FC = () => {
	return (
		<>
			<SEO title="Projects" />
			<Projects />
		</>
	);
};

export default projects;
