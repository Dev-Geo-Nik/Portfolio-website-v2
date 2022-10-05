import React from "react";
import Navbar from "../layout/Navbar";
import Shape from "../Shape";
import * as styles from "./projects.module.scss";

const Projects: React.FC = () => {
	return (
		<section className={styles.projects}>
			<Shape />
			<Navbar />
		</section>
	);
};

export default Projects;
