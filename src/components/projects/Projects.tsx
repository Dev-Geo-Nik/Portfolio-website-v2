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
			{/* <h4 className={styles.section_title}>Full-Stack Apps</h4> */}
			<section className={styles.projects_container}>
				<ProjectCard
					name="payapi"
					url="https://payapi-app.netlify.app/"
					githubUrl="https://github.com/dev-george-nikolaidis/payapi"
					imageElement={<StaticImage src="../../assets/images/projects/payapi.png" alt="" placeholder="tracedSVG" objectFit="fill" className={styles.image} />}
				/>
				<ProjectCard
					name="Jobduddy"
					url="https://jobduddy-app.netlify.app/"
					githubUrl="https://github.com/dev-george-nikolaidis/jobbuddy"
					imageElement={<StaticImage src="../../assets/images/projects/jobduddy.png" alt="" placeholder="tracedSVG" objectFit="fill" className={styles.image} />}
				/>
				<ProjectCard
					name="Studio X"
					url="https://studio-x-portfolio.netlify.app/"
					githubUrl="https://github.com/dev-george-nikolaidis/studio-x"
					imageElement={<StaticImage src="../../assets/images/projects/studio-x.png" alt="" placeholder="tracedSVG" objectFit="fill" className={styles.image} />}
				/>
				<ProjectCard
					name="Hotburger"
					url=""
					githubUrl="https://github.com/Dev-Geo-Nik/HOTBURGER"
					imageElement={<StaticImage src="../../assets/images/projects/hotburger.png" alt="" placeholder="tracedSVG" objectFit="fill" className={styles.image} />}
				/>
				<ProjectCard
					name="Marco Polo"
					url="https://marco-polo-portfolio-app.netlify.app/"
					githubUrl="https://github.com/Dev-Geo-Nik/Marco-polo"
					imageElement={<StaticImage src="../../assets/images/projects/marco-polo.png" alt="" placeholder="tracedSVG" objectFit="fill" className={styles.image} />}
				/>
				<ProjectCard
					name="Photosnap"
					url="https://photosnap-pro.netlify.app/"
					githubUrl="https://github.com/dev-george-nikolaidis/photosnap"
					imageElement={<StaticImage src="../../assets/images/projects/photosnap.png" alt="" placeholder="tracedSVG" objectFit="fill" className={styles.image} />}
				/>
				<ProjectCard
					name="Space Tourism"
					url="https://astonishing-eclair-1afa9e.netlify.app/"
					githubUrl="https://github.com/Dev-Geo-Nik/Space-Tourism"
					imageElement={<StaticImage src="../../assets/images/projects/space-tourism.png" alt="" placeholder="tracedSVG" objectFit="fill" className={styles.image} />}
				/>
				<ProjectCard
					name="Clock"
					url="https://clock-portfolio-project.netlify.app/"
					githubUrl="https://github.com/Dev-Geo-Nik/Clock"
					imageElement={<StaticImage src="../../assets/images/projects/clock.png" alt="" placeholder="tracedSVG" objectFit="fill" className={styles.image} />}
				/>
				<ProjectCard
					name="Cinemania"
					url=""
					githubUrl="https://github.com/dev-george-nikolaidis/Cinemania"
					imageElement={<StaticImage src="../../assets/images/projects/cinemania.png" alt="" placeholder="tracedSVG" objectFit="fill" className={styles.image} />}
				/>
			</section>
		</section>
	);
};

export default Projects;
