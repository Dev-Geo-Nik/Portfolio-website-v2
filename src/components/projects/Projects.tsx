import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Navbar from "../layout/Navbar";
import Shape from "../Shape";
import ProjectCard from "./ProjectCard";

import * as styles from "./projects.module.scss";

const Projects: React.FC = () => {
	return (
		<section className={styles.projects}>
			<Shape />
			<Navbar />
			<div className={styles.title_container}>
				<h2 className={styles.title}>
					My <span className={styles.span_text}>Projects</span>
				</h2>
			</div>

			<section className={styles.projects_container}>
				<ProjectCard
					name="Hotburger"
					url="https://hotburger-restaurant.netlify.app/"
					githubUrl="https://github.com/Dev-Geo-Nik/HOTBURGER"
					imageElement={
						<StaticImage src="../../assets/images/projects/hotburger.png" alt="Hotburger website portfolio project" placeholder="tracedSVG" objectFit="fill" className={styles.image} />
					}
				/>
				<ProjectCard
					name="Space Tourism"
					url="https://astonishing-eclair-1afa9e.netlify.app/"
					githubUrl="https://github.com/Dev-Geo-Nik/Space-Tourism"
					imageElement={
						<StaticImage
							src="../../assets/images/projects/space-tourism.png"
							alt="Hotburger website portfolio project"
							placeholder="tracedSVG"
							objectFit="fill"
							className={styles.image}
						/>
					}
				/>
			</section>
		</section>
	);
};

export default Projects;
